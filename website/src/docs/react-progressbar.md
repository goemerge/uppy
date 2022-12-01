---
title: "&lt;ProgressBar />"
type: docs
module: "@growthcloud/react"
permalink: docs/react/progress-bar/
alias: docs/react/progressbar/
order: 4
category: "React"
---

The `<ProgressBar />` component wraps the [`@growthcloud/progress-bar`][] plugin.

## Installation

Install from NPM:

```shell
npm install @growthcloud/react @growthcloud/progress-bar @growthcloud/core
```

```js
import { ProgressBar } from "@growthcloud/react";

// Alternatively, you can also use a default import:
// import ProgressBar from '@growthcloud/react/lib/ProgressBar'
```

## CSS

The `ProgressBar` plugin requires the following CSS for styling:

```js
import "@growthcloud/core/dist/style.css";
import "@growthcloud/progress-bar/dist/style.css";
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Progress Bar styles from `@growthcloud/progress-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Props

The `<ProgressBar />` component supports all [`@growthcloud/progress-bar`][] options as props. Additionally, an Uppy instance must be provided in the `uppy={}` prop: see [Initializing Uppy](/docs/react/initializing) for details.

```js
import React from "react";
import { ProgressBar } from "@growthcloud/react";

export default function MyComponent(props) {
  const { uppy } = props;
  return (
    <ProgressBar
      // assuming `props.uppy` contains an Uppy instance:
      uppy={uppy}
      fixed
      hideAfterFinish
    />
  );
}
```

[`@growthcloud/progress-bar`]: /docs/progress-bar/
