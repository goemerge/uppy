---
title: "&lt;FileInput />"
type: docs
module: "@growthcloud/react"
permalink: docs/react/file-input/
alias: docs/react/fileinput/
order: 4
category: "React"
---

The `<FileInput />` component wraps the [`@growthcloud/file-input`](/docs/file-input/) plugin.

## Installation

Install from NPM:

```shell
npm install @growthcloud/react @growthcloud/file-input @growthcloud/core
```

```js
import { FileInput } from "@growthcloud/react";

// Alternatively, you can also use a default import:
// import FileInput from '@growthcloud/react/lib/FileInput';
```

## CSS

The `FileInput` component includes some basic styles. You can also choose not to use it and provide your own styles instead:

```js
import "@growthcloud/core/dist/style.css";
import "@growthcloud/file-input/dist/style.css";
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Drag & Drop styles from `@growthcloud/file-input/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

## Props

The `<FileInput />` component supports all [FileInput](/docs/file-input/) options as props. Additionally, an Uppy instance must be provided in the `uppy={}` prop: see [Initializing Uppy](/docs/react/initializing) for details.

```js
import React from "react";
import { FileInput } from "@growthcloud/react";

export default function MyComponent(props) {
  const { uppy } = props;
  return (
    <FileInput
      // assuming `props.uppy` contains an Uppy instance:
      uppy={uppy}
      pretty
      inputName="files[]"
    />
  );
}
```
