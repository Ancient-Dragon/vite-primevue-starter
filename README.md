# Vite Typescript + PrimeVue Starter

[![CI](https://github.com/sfxcode/vite-primevue-starter/actions/workflows/main.yml/badge.svg)](https://github.com/sfxcode/vite-primevue-starter/actions/workflows/main.yml)

## Features

- Vue 3.2 (with script setup)
- Routing using [vue-router 4](https://next.router.vuejs.org/)
- TypeScript 4.3
- PostCSS 8 w/ `postcss-nesting` plugin
- Eslint
- Prettier
- Testing with cypress and Jest

## IDE

If you use IntelliJ you should use node-modules linler mode in .yarnrc.yml,
otherwise IntelliJ has problems with Autocompletion.

## Project setup and usage

Install dependencies:

```
yarn
```

Run development server:

```
yarn dev
```

Open Cypress test runner:

```
yarn test:e2e
```

Jest test runner:

```
yarn test:unit
```

Run Cypress tests in headless mode:

```
yarn test:ci
```

Build and preview built site locally:

```
yarn preview
```

Build:

```
yarn build
```
