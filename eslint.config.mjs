import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

// eslint-config-next v16 ships native ESLint flat config arrays.
const eslintConfig = [...coreWebVitals, ...typescriptConfig];

export default eslintConfig;
