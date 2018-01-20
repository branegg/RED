module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-new-object": 1,
        "no-array-constructor": 1,
        "no-var": 1,
        "no-unused-vars": [1, "warn"],
        "quotes": [1, "single"],
        "max-len": [1, 80, 2], // 2 spaces per tab, max 80 chars per line
        "no-inner-declarations": [1, "both"],
        "no-shadow-restricted-names": 1,
        "one-var": 0,
        "vars-on-top": 1,
        "eqeqeq": 1,
        "curly": [1, "multi"],
        "no-mixed-spaces-and-tabs": 1,
        "space-before-blocks": [1, "always"],
        "space-infix-ops": 1,
        "eol-last": 1,
        "comma-style": [1, "last"],
        "comma-dangle": 0,
        "semi": [1, "always"],
        "radix": 1,
        "camelcase": 1,
        "new-cap": 1,
        "consistent-this": [1, "_this"],
        "func-names": 1
    }
};