---
title: "Svelte"
type: docs
module: "@growthcloud/svelte"
permalink: docs/svelte/
order: 1
category: "Other Integrations"
---

Uppy provides [Svelte][] components for the included UI plugins.

## Installation

All Svelte components are provided through the `@growthcloud/svelte` package.

Install from NPM:

```shell
npm install @growthcloud/svelte
# Or with yarn
yarn add @growthcloud/svelte
```

## CSS

Make sure to also include the necessary CSS files for each Uppy Svelte component you are using.

For [the example](https://github.com/goemerge/uppy/tree/main/examples/svelte-example), we used `svelte-preprocess` and `postcss` to allow imports in CSS. Here is a basic guide for getting that configured with Rollup.

```shell
npm install -D postcss postcss-import postcss-load-config
# Or with yarn
yarn add -D postcss postcss-import postcss-load-config
```

Then create a `postcss.config.js` like so:

```js
import postcss from "postcss-import";

export default {
  plugins: [postcss],
};
```

Finally, enable `postcss` in your `rollup.config.js`

```js
import preprocess from "svelte-preprocess";
// ...
svelte({
  preprocess: preprocess({
    postcss: true,
  }),
});
// ...
```

## Usage

The components can be used with [Svelte][] and frameworks that are based off it, like [Sapper][].

Instead of adding a UI plugin to an Uppy instance with `.use()`, the Uppy instance can be passed into components as an `uppy` prop.

```html
<main><Dashboard uppy={uppy} plugins={["Webcam"]} /></main>

<script>
  import { Dashboard } from "@growthcloud/svelte";

  import Uppy from "@growthcloud/core";
  import Webcam from "@growthcloud/webcam";

  const uppy = new Uppy().use(Webcam);
</script>
```

The following plugins are available as Svelte component wrappers (you need to
install each package separately):

- `<Dashboard />` - renders an inline [`@growthcloud/dashboard`][].
- `<DashboardModal />` - renders a [`@growthcloud/dashboard`][] modal.
- `<DragDrop />` - renders a [`@growthcloud/drag-drop`][] area.
- `<ProgressBar />` - renders a [`@growthcloud/progress-bar`][].
- `<StatusBar />` - renders a [`@growthcloud/status-bar`][].

Each component takes a `props` prop that will be passed to the UI Plugin. Both `@growthcloud/dashboard` based plugins also take a `plugins` array as a props, make it easier to add your plugins.

### Initializing Uppy

Due to the way Svelte handles reactivity, you can initialize Uppy the same way you would with vanilla JavaScript

```js
import Uppy from "@growthcloud/core";
import Webcam from "@growthcloud/webcam";

const uppy = new Uppy().use(Webcam);
```

## Components

### `<Dashboard />`

#### CSS

The `Dashboard` component requires the following CSS for styling:

```html
<style global>
  @import "@growthcloud/core/dist/style.css";
  @import "@growthcloud/dashboard/dist/style.css";
</style>
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Dashboard styles from `@growthcloud/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

⚠️ The `@growthcloud/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@growthcloud/status-bar`](/docs/status-bar) and [`@growthcloud/informer`](/docs/informer)). If you also use the `@growthcloud/status-bar` or `@growthcloud/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@growthcloud/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@growthcloud/url` and `@growthcloud/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

#### Props

The `<Dashboard />` component supports all `@growthcloud/dashboard` options to be passed as an object to the `props` prop:

```html
<Dashboard uppy={uppy} props={{ height: 350, plugins: ['Webcam'] }} />
```

The `<Dashboard />` cannot be passed to a `target:` option of a remote provider or plugins such as [`@growthcloud/webcam`][]. To use other plugins like [`@growthcloud/webcam`][] with the `<Dashboard />` component, first add them to the Uppy instance, and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

### `<DashboardModal />`

#### CSS

The `DashboardModal` component requires the following CSS for styling:

```html
<style global>
  @import "@growthcloud/core/dist/style.css";
  @import "@growthcloud/dashboard/dist/style.css";
</style>
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Dashboard styles from `@growthcloud/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

⚠️ The `@growthcloud/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@growthcloud/status-bar`](/docs/status-bar) and [`@growthcloud/informer`](/docs/informer)). If you also use the `@growthcloud/status-bar` or `@growthcloud/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@growthcloud/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@growthcloud/url` and `@growthcloud/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

#### Props

The `<DashboardModal />` component supports all `@growthcloud/dashboard` options to be passed as an object on the `props` prop. An Uppy instance must be provided in the `uppy={}` prop.

The `<DashboardModal />` cannot be passed to a `target:` option of a remote provider or plugins such as \[`@growthcloud/webcam`]\[@growthcloud/webcam]. To use other plugins like \[`@growthcloud/webcam`]\[@growthcloud/webcam] with the `<DashboardModal />` component, first add them to the Uppy instance, and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

### `<DragDrop />`

#### CSS

The `DragDrop` component includes some basic styles, like shown in the [example](/examples/dragdrop). You can also choose not to use it and provide your own styles instead:

```html
<style global>
  @import "@growthcloud/core/dist/style.css";
  @import "@growthcloud/drag-drop/dist/style.css";
</style>
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Drag & Drop styles from `@growthcloud/drag-drop/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.js

#### Props

The `<DragDrop />` component supports all `@growthcloud/drag-drop` options to be passed as an object on the `props` prop. An Uppy instance must be provided in the `uppy={}` prop.

### `<ProgressBar />`

#### CSS

The `ProgressBar` plugin requires the following CSS for styling:

```html
<style global>
  @import "@growthcloud/core/dist/style.css";
  @import "@growthcloud/progress-bar/dist/style.css";
</style>
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Progress Bar styles from `@growthcloud/progress-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<ProgressBar />` component supports all `@growthcloud/progress-bar` options to be passed as an object on the `props` prop. An Uppy instance must be provided in the `uppy={}` prop.

### `<StatusBar />`

#### CSS

The `StatusBar` plugin requires the following CSS for styling:

```html
<style global>
  @import "@growthcloud/core/dist/style.css";
  @import "@growthcloud/status-bar/dist/style.css";
</style>
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Status Bar styles from `@growthcloud/status-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

#### Props

The `<StatusBar />` component supports all `@growthcloud/status-bar` options to be passed as an object on the `props` prop. An Uppy instance must be provided in the `uppy={}` prop.

[`@growthcloud/dashboard`]: /docs/dashboard
[`@growthcloud/drag-drop`]: /docs/drag-drop
[`@growthcloud/progress-bar`]: /docs/progress-bar
[`@growthcloud/status-bar`]: /docs/status-bar
[`@growthcloud/webcam`]: /docs/webcam/
[svelte]: https://svelte.dev
[sapper]: https://sapper.svelte.dev
