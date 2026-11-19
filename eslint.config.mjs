import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "./node_modules/.pnpm/@eslint+eslintrc@3.3.7/node_modules/@eslint/eslintrc/dist/eslintrc.cjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"] },
];
export default eslintConfig;
