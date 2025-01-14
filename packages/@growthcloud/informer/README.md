# @growthcloud/informer

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/informer.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/informer)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

The Informer is a pop-up bar for showing notifications. When other plugins have some exciting news (or error) to share, they can show a notification here.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import Informer from "@growthcloud/informer";

const uppy = new Uppy();
uppy.use(Informer, {
  target: "#mount-point",
});
```

## Installation

```bash
$ npm install @growthcloud/informer
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/informer).

## License

[The MIT License](./LICENSE).
