import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Allow unescaped characters in JSX
      "@typescript-eslint/no-unused-vars": ["warn"], // Warn for unused variables
      "@typescript-eslint/no-explicit-any": ["warn"], // Warn when using 'any'
      "react-hooks/exhaustive-deps": "warn", // Warn for missing dependencies in hooks
      "@next/next/no-img-element": "off", // Allow using <img> (if necessary)
      "@typescript-eslint/no-empty-object-type": "off"
    },
  },
];

export default eslintConfig;