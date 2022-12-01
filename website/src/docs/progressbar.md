---
type: docs
order: 1
title: "Progress Bar"
module: "@growthcloud/progress-bar"
permalink: docs/progress-bar/
alias: docs/progressbar/
category: "UI Elements"
tagline: "add a small YouTube-style progress bar at the top of the page"
---

`@growthcloud/progress-bar` is a minimalist plugin that shows the current upload progress in a thin bar element, like the ones used by YouTube and GitHub when navigating between pages.

```js
import ProgressBar from "@growthcloud/progress-bar";

uppy.use(ProgressBar, {
  // Options
});
```

<a class="TryButton" href="/examples/dragdrop/">Try it live</a>

The `@growthcloud/drag-drop` example uses a Progress Bar to show progress.

## Installation

This plugin is published as the `@growthcloud/progress-bar` package.

Install from NPM:

```shell
npm install @growthcloud/progress-bar
```

In the [CDN package](/docs/#With-a-script-tag), the plugin class is available on the `Uppy` global object:

```js
const { ProgressBar } = Uppy;
```

## CSS

The `@growthcloud/progress-bar` plugin requires the following CSS for styling:

```js
import "@growthcloud/core/dist/style.css";
import "@growthcloud/progress-bar/dist/style.css";
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Progress Bar styles from `@growthcloud/progress-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

⚠️ If you use the [`@growthcloud/dashboard`](/docs/dashboard) plugin, you do not need to include the styles for the Progress Bar, because the Dashboard already includes it.

## Options

The `@growthcloud/progress-bar` plugin has the following configurable options:

```js
uppy.use(ProgressBar, {
  target: ".UploadForm",
  fixed: false,
  hideAfterFinish: true,
});
```

### `id: 'ProgressBar'`

A unique identifier for this Progress Bar. It defaults to `'ProgressBar'`. Use this if you need to add many `ProgressBar` instances.

### `target: null`

DOM element, CSS selector, or plugin to mount the progress bar into.

### `fixed: false`

When set to true, show the progress bar at the top of the page with `position: fixed`. When set to false, show the progress bar inline wherever it’s mounted.

```js
uppy.use(ProgressBar, {
  target: "body",
  fixed: true,
});
```

### `hideAfterFinish: true`

When set to true, hides the progress bar after the upload has finished. If set to false, it remains visible.
