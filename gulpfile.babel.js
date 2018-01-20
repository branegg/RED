import babelify from 'babelify';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import plugins from 'gulp-load-plugins';
import source from 'vinyl-source-stream';
import "babel-polyfill"; 


/* ----------------- */
/* Development
/* ----------------- */

gulp.task('development', ['scripts', 'styles'], () => {
    browserSync({
        'server': './',
        'snippetOptions': {
            'rule': {
                'match': /<\/body>/i,
                'fn': (snippet) => snippet
            }
        }
    });

    gulp.watch('./src/*/*.scss', ['styles', browserSync.reload]);
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./*.html', browserSync.reload);
});


/* ----------------- */
/* Scripts
/* ----------------- */

gulp.task('scripts', () => {
    return browserify({
        'entries': ['./src/js/index.js'],
        'debug': true,
        'transform': [
            babelify.configure({
                'presets': ['es2015']
            })
        ]
    })
    .add(require.resolve('babel-polyfill'))
    .bundle()
    .on('error', function () {
        var args = Array.prototype.slice.call(arguments);

        plugins().notify.onError({
            'title': 'Compile Error',
            'message': '<%= error.message %>'
        }).apply(this, args);

        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.stream());
});


/* ----------------- */
/* Styles
/* ----------------- */

gulp.task('styles', () => {
    return gulp.src('./src/style/*.scss')
        .pipe(plugins().sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(plugins().sass().on('error', plugins().sass.logError))
        .pipe(plugins().sourcemaps.write())
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream());
});

/* ----------------- */
/* Taks
/* ----------------- */

gulp.task('default', ['development']);