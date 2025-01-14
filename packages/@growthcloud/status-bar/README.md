# @growthcloud/status-bar

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/status-bar.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/status-bar)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

The status-bar shows upload progress and speed, ETAs, pre- and post-processing information, and allows users to control (pause/resume/cancel) the upload.
Best used together with a basic file source plugin, such as [@growthcloud/file-input](https://uppy.io/docs/file-input) or [@growthcloud/drag-drop](https://uppy.io/docs/drag-drop), or a custom implementation. It’s also included in the [@growthcloud/dashboard](https://uppy.io/docs/dashboard) plugin.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import StatusBar from "@growthcloud/status-bar";

const uppy = new Uppy();
uppy.use(StatusBar, {
  target: "body",
  hideUploadButton: false,
  showProgressDetails: false,
  hideAfterFinish: true,
});
```

## Installation

```bash
$ npm install @growthcloud/status-bar
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/status-bar).

## License

[The MIT License](./LICENSE).
