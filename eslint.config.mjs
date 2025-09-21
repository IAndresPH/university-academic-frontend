// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import json from '@eslint/json';
import vueParser from 'vue-eslint-parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['src/**/*.js'],
    plugins: { js, prettier: pluginPrettier },
    languageOptions: { globals: { ...globals.browser, process: 'readonly' } },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['src/**/*.vue'],
    plugins: { vue: pluginVue, prettier: pluginPrettier },
    languageOptions: {
      parser: vueParser,
      globals: { ...globals.browser, process: 'readonly' },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json', 'yarn.lock'], // Ignora los lockfiles
    plugins: { json },
    language: 'json/json',
    rules: {
      ...json.configs.recommended.rules,
    },
  },
]);
