module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: 0,
    "no-restricted-exports": 0,
    "comma-dangle": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "no-unused-vars": 0,
    "implicit-arrow-linebreak": 0,
    "react/jsx-one-expression-per-line": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
