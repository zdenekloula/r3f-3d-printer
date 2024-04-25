module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",

    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "simple-import-sort",
    "import",
    "@typescript-eslint",
    "unicorn",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/resolver": {
      project: "<root>/tsconfig.json",
    },
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-default-export": ["error"],

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],

    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          Props: true,
          props: true,
          ref: true,
          Ref: true,
        },
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          pascalCase: true,
          kebabCase: true,
          camelCase: true,
        },
      },
    ],
  },
};
