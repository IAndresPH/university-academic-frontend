// eslint.config.mjs
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import globals from 'globals'

export default [
  // ✅ Bloque base: define globals de browser y node
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,  // document, window, setTimeout, etc.
        ...globals.node      // process, __dirname, etc.
      }
    }
  },

  // Reglas base JS
  js.configs.recommended,

  // .vue (Vue 3) + TS dentro del <script>
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    },
    plugins: { vue: pluginVue },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      'vue/multi-word-component-names': 'off'
    }
  },

  // Archivos .ts/.tsx
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]
