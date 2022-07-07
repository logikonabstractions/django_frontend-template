/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src/"]],
        extensions: [".js", ".vue"],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
