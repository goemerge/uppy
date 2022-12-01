---
title: "&lt;DragDrop />"
type: docs
module: "@growthcloud/react"
permalink: docs/react/drag-drop/
alias: docs/react/dragdrop/
order: 3
category: "React"
---

The `<DragDrop />` component wraps the [`@growthcloud/drag-drop`](/docs/drag-drop/) plugin.

## Installation

Install from NPM:

```shell
npm install @growthcloud/react @growthcloud/drag-drop @growthcloud/core
```

```js
import { DragDrop } from "@growthcloud/react";

// Alternatively, you can also use a default import:
// import DragDrop from '@growthcloud/react/lib/DragDrop';
```

## CSS

The `DragDrop` component includes some basic styles, like shown in the [example](/examples/dragdrop). You can also choose not to include those and use your own styles instead:

```js
import "@growthcloud/core/dist/style.css";
import "@growthcloud/drag-drop/dist/style.css";
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Drag & Drop styles from `@growthcloud/drag-drop/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Props

The `<DragDrop />` component supports all [DragDrop](/docs/drag-drop/) options as props. Additionally, an Uppy instance must be provided in the `uppy={}` prop: see [Initializing Uppy](/docs/react/initializing) for details.

```js
import React from "react";
import { DragDrop } from "@growthcloud/react";

export default function MyComponent(props) {
  const { uppy } = props;
  return (
    <DragDrop
      width="100%"
      height="100%"
      note="Images up to 200×200px"
      // assuming `props.uppy` contains an Uppy instance:
      uppy={uppy}
      locale={{
        strings: {
          // Text to show on the droppable area.
          // `%{browse}` is replaced with a link that opens the system file selection dialog.
          dropHereOr: "Drop here or %{browse}",
          // Used as the label for the link that opens the system file selection dialog.
          browse: "browse",
        },
      }}
    />
  );
}
```
