import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";
import json from "@eslint/json";
import vueParser from "vue-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["node_modules/**", "dist/**", "package-lock.json", "yarn.lock", "coverage/**"],
  },

  {
    files: ["src/**/*.js"],
    plugins: { js, prettier: pluginPrettier },
    languageOptions: { globals: { ...globals.browser, process: "readonly" } },
    rules: {
      ...js.configs.recommended.rules,
      quotes: ["error", "double"],
      "prettier/prettier": ["error", { singleQuote: false }],
    },
  },
  {
    files: ["src/**/*.vue"],
    plugins: { vue: pluginVue, prettier: pluginPrettier },
    languageOptions: {
      parser: vueParser,
      globals: { ...globals.browser, process: "readonly" },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      quotes: ["error", "double"],
      "prettier/prettier": ["error", { singleQuote: false }],
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    rules: {
      ...json.configs.recommended.rules,
    },
  },
]);
