module.exports = {
    "env": {
        "browser": false,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.eslint.json"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": ["error", "double"],
        "@typescript-eslint/quotes": ["error", "double"],
        "linebreak-style": "off",
        "radix": "off",
        "object-curly-newline": "off",
        "arrow-body-style": "off",
        "no-console": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"],
        "import/extensions": ["error", "never"],
        "import/no-unresolved": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "import/no-cycle": "off",
        "import/prefer-default-export": "off",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "off",
        "max-classes-per-file": "off"
    }
}
