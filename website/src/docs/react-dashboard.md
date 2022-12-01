---
title: "&lt;Dashboard />"
type: docs
module: "@growthcloud/react"
permalink: docs/react/dashboard/
order: 5
category: "React"
---

The `<Dashboard />` component wraps the [`@growthcloud/dashboard`][] plugin. It only renders the Dashboard inline. To use the Dashboard modal (`inline: false`), use the [`<DashboardModal />`](/docs/react/dashboard-modal) component.

## Installation

Install from NPM:

```shell
npm install @growthcloud/react @growthcloud/dashboard @growthcloud/core
```

```js
import { Dashboard } from "@growthcloud/react";

// Alternatively, you can also use a default import:
// import Dashboard from '@growthcloud/react/lib/Dashboard'
```

## CSS

The `Dashboard` component requires the following CSS for styling:

```js
import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";
```

Import general Core styles from `@growthcloud/core/dist/style.css` first, then add the Dashboard styles from `@growthcloud/dashboard/dist/style.css`. A minified version is also available as `style.min.css` at the same path. The way to do import depends on your build system.

⚠️ The `@growthcloud/dashboard` plugin includes CSS for the Dashboard itself, and the various plugins used by the Dashboard, such as ([`@growthcloud/status-bar`](/docs/status-bar) and [`@growthcloud/informer`](/docs/informer)). If you also use the `@growthcloud/status-bar` or `@growthcloud/informer` plugin directly, you should not include their CSS files, but instead only use the one from the `@growthcloud/dashboard` plugin.

Styles for Provider plugins, like Google Drive and Instagram, are also bundled with Dashboard styles. Styles for other plugins, such as `@growthcloud/url` and `@growthcloud/webcam`, are not included. If you are using those, please see their docs and make sure to include styles for them as well.

## Props

The `<Dashboard />` component supports all [`@growthcloud/dashboard`][] options as props. Additionally, an Uppy instance must be provided in the `uppy={}` prop: see [Initializing Uppy](/docs/react/initializing) for details.

> The `<Dashboard />` cannot be passed to a `target:` option of a remote provider or plugins such as [`@growthcloud/webcam`][]. To use other plugins like [`@growthcloud/webcam`][] (Image Editor, Google Drive, etc) with the `<Dashboard />` component, first add them to the Uppy instance, and then specify their `id` in the [`plugins`](/docs/dashboard/#plugins) prop:

<!-- eslint-disable react/jsx-props-no-spreading -->

```js
import React from "react";
import { Dashboard } from "@growthcloud/react";

function Uploader() {
  const uppy = React.useMemo(() => {
    return (
      new Uppy()
        .use(Webcam) // `id` defaults to "Webcam". Note: no `target` option!
        // or
        .use(Webcam, { id: "MyWebcam" })
    ); // `id` is… "MyWebcam"
  }, []);
  React.useEffect(() => {
    return () => uppy.close({ reason: "unmount" });
  }, [uppy]);

  return <Dashboard uppy={uppy} plugins={["Webcam"]} {...props} />;
}
```

[`@growthcloud/dashboard`]: /docs/dashboard/
[`@growthcloud/webcam`]: /docs/webcam/
