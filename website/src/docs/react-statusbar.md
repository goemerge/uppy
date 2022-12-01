---
title: "&lt;StatusBar />"
type: docs
module: "@growthcloud/react"
permalink: docs/react/status-bar/
alias: docs/react/statusbar/
order: 2
category: "React"
---

The `<StatusBar />` component wraps the [`@growthcloud/status-bar`][] plugin.

## Installation

Install from NPM:

```shell
npm install @growthcloud/react @growthcloud/status-bar @growthcloud/core
```

```js
import { StatusBar } from "@growthcloud/react";

// Alternatively, you can also use a default import:
// import StatusBar from '@growthcloud/react/lib/StatusBar'
```

## CSS

The `StatusBar` component requires the following CSS for styling:

```js
import "@growthcloud/core/dist/style.css";
import "@growthcloud/status-bar/dist/style.css";
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Status Bar styles from `@growthcloud/status-bar/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Props

The `<StatusBar />` component supports all [`@growthcloud/status-bar`][] options as props. Additionally, an Uppy instance must be provided in the `uppy={}` prop: see [Initializing Uppy](/docs/react/initializing) for details.

```js
import React from "react";
import { StatusBar } from "@growthcloud/react";

export default function MyComponent(props) {
  const { uppy } = props;
  return (
    <StatusBar
      // assuming `props.uppy` contains an Uppy instance:
      uppy={uppy}
      hideUploadButton
      hideAfterFinish={false}
      showProgressDetails
    />
  );
}
```

[`@growthcloud/status-bar`]: /docs/status-bar/
