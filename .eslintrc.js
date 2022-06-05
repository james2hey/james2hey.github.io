module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended' // Must be last to override any conflicting eslint config.
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', '@typescript-eslint'],
    rules: {},
    settings: {
        react: {
            version: 'detect'
        }
    }
};
