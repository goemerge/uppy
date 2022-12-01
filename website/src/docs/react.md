---
title: "Introduction"
type: docs
module: "@growthcloud/react"
permalink: docs/react/
order: 0
category: "React"
---

Uppy provides [React][] components for the included UI plugins.

## Installation

All React components are provided through the `@growthcloud/react` package.

Install from NPM:

```shell
npm install @growthcloud/react
```

## CSS

Make sure to also include the necessary CSS files for each Uppy React component you are using. Follow links for individual components docs below for details on that.

## Usage

The components can be used with either [React][] or API-compatible alternatives such as [Preact][].

Instead of adding a UI plugin to an Uppy instance with `.use()`, the Uppy instance can be passed into components as an `uppy` prop.
All other props are passed as options to the plugin.

```js
import React from "react";
import Uppy from "@growthcloud/core";
import Tus from "@growthcloud/tus";
import { DragDrop } from "@growthcloud/react";

const uppy = new Uppy({
  meta: { type: "avatar" },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true,
});

uppy.use(Tus, { endpoint: "/upload" });

uppy.on("complete", (result) => {
  const url = result.successful[0].uploadURL;
  store.dispatch({
    type: "SET_USER_AVATAR_URL",
    payload: { url },
  });
});

const AvatarPicker = ({ currentAvatar }) => {
  return (
    <div>
      <img src={currentAvatar} alt="Current Avatar" />
      <DragDrop
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
    </div>
  );
};
```

The following plugins are available as React component wrappers (you need to
install each package separately):

- [\<Dashboard />][<dashboard />] - renders an inline [`@growthcloud/dashboard`][].
- [\<DashboardModal />][<dashboardmodal />] - renders a [`@growthcloud/dashboard`][] modal.
- [\<DragDrop />][<dragdrop />] - renders a [`@growthcloud/drag-drop`][] area.
- [\<ProgressBar />][<progressbar />] - renders a [`@growthcloud/progress-bar`][].
- [\<StatusBar />][<statusbar />] - renders a [`@growthcloud/status-bar`][].

[react]: https://facebook.github.io/react
[preact]: https://preactjs.com/
[<dashboard />]: /docs/react/dashboard
[<dragdrop />]: /docs/react/dragdrop
[<progressbar />]: /docs/react/progress-bar
[<statusbar />]: /docs/react/status-bar
[<dashboardmodal />]: /docs/react/dashboard-modal
[`@growthcloud/dashboard`]: /docs/dashboard
[`@growthcloud/drag-drop`]: /docs/drag-drop
[`@growthcloud/progress-bar`]: /docs/progress-bar
[`@growthcloud/status-bar`]: /docs/status-bar
