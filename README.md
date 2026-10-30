This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Linting

This project uses Oxlint for fast correctness checks and ESLint for the remaining
Next.js, React, React Hooks, accessibility, and TypeScript rules.
`eslint-plugin-oxlint` reads `.oxlintrc.json` to disable overlapping ESLint checks.
See the [official integration guide](https://github.com/oxc-project/eslint-plugin-oxlint).

```bash
pnpm lint         # Run Oxlint, then ESLint; warnings fail the check
pnpm lint:fix     # Apply safe automatic fixes with both tools
pnpm lint:oxlint  # Run only Oxlint
pnpm lint:eslint  # Run only the remaining ESLint checks
```

Configure Oxlint in `.oxlintrc.json` and remaining ESLint rules in
`eslint.config.mjs`. Both tools ignore Next.js output, build output, coverage,
`next-env.d.ts`, and the four Next.js-generated files currently in `types/`.
Run `pnpm lint` in CI as well as locally.

### Pre-commit checks

`pnpm install` installs Husky's Git hooks through the `prepare` script.
Before each commit, lint-staged runs Oxlint followed by ESLint on staged
`js`, `jsx`, `mjs`, `cjs`, `ts`, `tsx`, `mts`, and `cts` files only.
Errors or warnings block the commit; the hook does not automatically fix files.
Generated files remain excluded by each linter's ignore configuration.

Markdown/MDX, text, images, fonts, CSS, JSON, YAML, lockfiles, and other file
types do not trigger these JavaScript/TypeScript linters. This is a tool scope
choice: CSS, MDX, package manifests, lockfiles, and configuration files can still
affect the build and must be validated by CI/build checks.
JavaScript/TypeScript configuration files and scripts are included in the hook.

Run `pnpm lint:staged` to check the current staged files manually, or
`pnpm lint` for the entire project.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
