# @growthcloud/redux-dev-tools

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/redux-dev-tools.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/redux-dev-tools)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

ReduxDevTools plugin that syncs with redux-devtools browser or JS extensions, and allows for basic time travel:

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import ReduxDevTools from "uppy/redux-dev-tools";

const uppy = new Uppy();
uppy.use(ReduxDevTools);
```

## Installation

```bash
$ npm install @growthcloud/redux-dev-tools
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/redux-dev-tools).

## License

[The MIT License](./LICENSE).
