# @growthcloud/tus

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/tus.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/tus)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

The Tus plugin brings [tus.io][] resumable file uploading to Uppy by wrapping the [tus-js-client][].

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import Tus from "@growthcloud/tus";

const uppy = new Uppy();
uppy.use(Tus, {
  endpoint: "https://tusd.tusdemo.net/files/", // use your tus endpoint here
  resume: true,
  retryDelays: [0, 1000, 3000, 5000],
});
```

## Installation

```bash
$ npm install @growthcloud/tus
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/tus).

## License

[The MIT License](./LICENSE).

[tus.io]: https://tus.io
[tus-js-client]: https://github.com/tus/tus-js-client
