module.exports = {
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/script-setup-uses-vars': 0,
    'prefer-rest-params': 0,
    'consistent-return': 0,
    'max-len': ['error', { code: 200 }],
    'no-console': 0,
    'no-param-reassign': 0,
  },
  overrides: [
    {
      files: ['*.js', '*.vue'],
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
      extensions: ['.js', '.less', '.json', '.vue'],
    },
  },
};
