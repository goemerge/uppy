# @growthcloud/thumbnail-generator

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/thumbnail-generator.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/thumbnail-generator)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

Uppy plugin that generates small previews of images to show on your upload UI.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import ThumbnailGenerator from "@growthcloud/thumbnail-generator";

const uppy = new Uppy();
uppy.use(ThumbnailGenerator, {
  thumbnailWidth: 200,
});
```

## Installation

```bash
$ npm install @growthcloud/thumbnail-generator
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

<!-- Undocumented currently
## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/DOC_PAGE_HERE).
-->

## License

[The MIT License](./LICENSE).
