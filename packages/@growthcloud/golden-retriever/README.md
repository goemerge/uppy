# @growthcloud/golden-retriever

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/golden-retriever.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/golden-retriever)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

The GoldenRetriever plugin saves selected files in your browser cache (Local Storage for metadata, then Service Worker for all blobs + IndexedDB for small blobs), so that if the browser crashes, Uppy can restore everything and continue uploading like nothing happened. Read more about it [on the blog](https://uppy.io/blog/2017/07/golden-retriever/).

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import GoldenRetriever from "@growthcloud/golden-retriever";

const uppy = new Uppy();
uppy.use(GoldenRetriever, {
  // Options
});
```

## Installation

```bash
$ npm install @growthcloud/golden-retriever
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/golden-retriever).

## License

[The MIT License](./LICENSE).
