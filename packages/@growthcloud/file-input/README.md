# @growthcloud/file-input

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/file-input.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/file-input)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

FileInput is the most barebones UI for selecting files—it shows a single button that, when clicked, opens up the browser’s file selector.

**[Read the docs](https://uppy.io/docs/fileinput)** | **[Try it](https://uppy.io/examples/xhrupload/)**

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import FileInput from "@growthcloud/file-input";

const uppy = new Uppy();
uppy.use(FileInput, {
  // Options
});
```

## Installation

```bash
$ npm install @growthcloud/file-input
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/fileinput).

## License

[The MIT License](./LICENSE).
