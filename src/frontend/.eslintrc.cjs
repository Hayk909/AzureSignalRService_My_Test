module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Рекомендации для Vue 3
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    indent: ['error', 2],
    'no-tabs': 'error', // Запрещаем табуляцию
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    'vue/no-unused-vars': 'warn',
    'vue/html-indent': ['error', 2], // Правило для отступов в HTML
    'vue/script-indent': ['error', 2, { baseIndent: 0 }], // Правило для отступов в скриптах Vue
    '@typescript-eslint/indent': ['error', 2], // Правило для отступов в TypeScript
    'vue/require-default-prop': 'warn',
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/no-template-key': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'import/prefer-default-export': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
    }], // требуем PascalCase
    'vue/no-multi-spaces': ['error'], // Опционально для лучшего оформления
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@views', './src/views'],
          ['@components', './src/components'],
          ['@features', './src/features'],
          ['@api', './src/api'],
          ['@types', './src/types'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
};
