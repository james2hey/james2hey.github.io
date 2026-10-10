import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist/', '.astro/'] },
    js.configs.recommended,
    tseslint.configs.recommended,
    astro.configs['flat/recommended'],
    astro.configs['flat/jsx-a11y-strict'],
    {
        files: ['public/sw.js'],
        languageOptions: { globals: globals.serviceworker }
    },
    // Must be last: turns off rules that conflict with Prettier.
    prettier
);
