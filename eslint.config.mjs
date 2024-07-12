import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import { fixupConfigRules } from '@eslint/compat';

export default [
    // {
    //     plugins: {
    //         'react-hooks': eslintReactHooks,
    //         // 'react': eslintReact,
    //         'react-refresh': reactRefresh,
    //         'prettier': prettierPlugin
    //     }
    // },
    ...fixupConfigRules(pluginReactConfig),
    { files: ['{**/*}.{js,mjs,cjs,jsx}'] },
    { languageOptions: { parserOptions: eslintReact.configs.recommended.parserOptions } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        ignores: ['node_modules', 'dist', 'build']
    }, {
        rules: {
            ...eslintConfigPrettier.rules,
            'prefer-const': 2
        }
    }
];