import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { flat } from "eslint-plugin-react/configs/flat";
import { eslint } from "@babel/eslint-parser";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    globals: globals.browser,
    parser: "@babel/eslint-parser",
    parserOptions: {
      requireConfigFile: false, // Não exige configuração separada do Babel
      babelOptions: {
        presets: ["@babel/preset-react"], // Garante suporte ao JSX
      },
      ecmaFeatures: {
        jsx: true, // Habilita suporte ao JSX
      },
    },
  },
  plugins: {
    react: pluginReact,
  },
  settings: {
    react: {
      version: "detect", // Detecta a versão do React automaticamente
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
