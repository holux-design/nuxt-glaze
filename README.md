<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# Glaze for Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href] [![Nuxt][nuxt-src]][nuxt-href]

An (unofficial) [Glaze](https://glaze.dev/) module for Nuxt

![](public/images/og_image.png)

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-glaze
```

That's it! You can now use [Glaze](https://glaze.dev/) in your Nuxt app ✨

Examples (from their docs):

```ts
<div data-animate='from:opacity-0.5 to:opacity-1'></div>
```

```ts
<div data-animate='to:scale.x-2|scale.y-2'></div>
```

## Configuration

You can use all settings for glaze in your `nuxt.config.ts` under the key
`glaze` like so:

```typescript
export default defineNuxtConfig({
  modules: [...],

  glaze: {
    // the root element which will be searched for elements
    element: document,
    // the attribute to search for
    dataAttribute: 'data-animate',
    // custom breakpoints
    breakpoints: {
      default: '(min-width: 1px)',
    },
    // defaults for animations
    defaults: {
      tl: 'ease-power2.inOut',
      element: 'to:x-500',
    },
    // custom presets
    presets: {
      helicopter: 'from:rotate-2160|duration-10',
    },
    // watch elements for changes and restart animations with new settings
    watch: false,
  },
})
```

Find a full list of options here:
[Config options for glaze](https://glaze.dev/documentation/install#config)

## Docs

### Find the full docs and examples here:

[Documentation](https://glaze.dev/documentation)

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  ```

</details>

<!-- Badges -->

[npm-version-src]:
  https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module
[npm-downloads-src]:
  https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/my-module
[license-src]:
  https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
