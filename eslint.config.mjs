import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-plugin-prettier";
import json from "@eslint/json";
import vueParser from "vue-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "package-lock.json",
      "yarn.lock",
      "coverage/**",
    ],
  },

  // JS
  {
    files: ["src/**/*.js"],
    plugins: { js, prettier: pluginPrettier },
    languageOptions: { globals: { ...globals.browser, process: "readonly" } },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": [
        "error",
        { singleQuote: false, htmlWhitespaceSensitivity: "ignore" },
      ],
    },
  },

  // Vue
  {
    files: ["src/**/*.vue"],
    plugins: { vue: pluginVue },
    languageOptions: {
      parser: vueParser,
      globals: { ...globals.browser, process: "readonly" },
    },
    rules: {
      ...pluginVue.configs["flat/recommended"][0].rules,
      "vue/multi-word-component-names": "off",
    },
  },

  // JSON
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    rules: {
      ...json.configs.recommended.rules,
    },
  },
]);
