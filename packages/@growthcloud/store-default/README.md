# @growthcloud/store-default

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/store-default.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/store-default)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

A basic object-based store for Uppy. This one is used by default, you do not need to add it manually.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import DefaultStore from "@growthcloud/store-default";

const uppy = new Uppy({
  store: new DefaultStore(),
});
```

## Installation

```bash
$ npm install @growthcloud/store-default
```

Alternatively, you can also use this package in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/stores#DefaultStore).

## License

[The MIT License](./LICENSE).
