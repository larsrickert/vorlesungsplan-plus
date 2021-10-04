module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.ts', '.json', '.vue'],
      },
    ],
    'vue/no-deprecated-slot-attribute': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'vue/max-len': [
          'error',
          {
            code: 100,
            template: 100,
            comments: 100,
            tabWidth: 2,
          },
        ],
      },
    },
  ],
  settings: {
    'vue-i18n': {
      localeDir: {
        pattern: './src/i18n/locales/*.{json}',
        localeKey: 'file', // or 'key'
      },
      messageSyntaxVersion: '^9.0.0',
    },
  },
};
