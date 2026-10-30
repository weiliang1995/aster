const config = {
  "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}": [
    "oxlint --deny-warnings",
    "eslint --max-warnings=0 --no-warn-ignored",
  ],
};

export default config;
