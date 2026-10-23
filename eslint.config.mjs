import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // components/react-bits holds vendored React Bits sources (MIT); lint our code, not theirs.
  globalIgnores([".next/**", "next-env.d.ts", "components/react-bits/**"]),
]);
