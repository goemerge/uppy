# @growthcloud/drag-drop

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/drag-drop.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/drag-drop)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

Droppable zone UI for Uppy. Drag and drop files into it to upload.

**[Read the docs](https://uppy.io/docs/dragdrop)** | **[Try it](https://uppy.io/examples/dragdrop/)**

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import DragDrop from "@growthcloud/drag-drop";

const uppy = new Uppy();
uppy.use(DragDrop, {
  target: "#upload",
});
```

## Installation

```bash
$ npm install @growthcloud/drag-drop
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/dragdrop).

## License

[The MIT License](./LICENSE).
