# @growthcloud/image-editor

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/image-editor.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/image-editor)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

Image Editor is an image cropping and editing plugin for Uppy. Designed to be used with the Dashboard UI (can in theory work without it).

⚠ In beta.

**[Read the docs](https://uppy.io/docs/image-editor)** | **[Try it](https://uppy.io/examples/dashboard/)**

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import ImageEditor from "@growthcloud/image-editor";

const uppy = new Uppy();
uppy.use(Dashboard);
uppy.use(ImageEditor, {
  target: Dashboard,
  quality: 0.7,
});
```

## Installation

```bash
$ npm install @growthcloud/image-editor
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/image-editor).

## License

[The MIT License](./LICENSE).
