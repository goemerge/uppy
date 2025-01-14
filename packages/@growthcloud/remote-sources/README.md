# @growthcloud/remote-sources

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

<a href="https://www.npmjs.com/package/@growthcloud/remote-sources"><img src="https://img.shields.io/npm/v/@growthcloud/compressor.svg?style=flat-square"></a> <img src="https://github.com/goemerge/uppy/workflows/Tests/badge.svg" alt="CI status for Uppy tests"> <img src="https://github.com/goemerge/uppy/workflows/Companion/badge.svg" alt="CI status for Companion tests"> <img src="https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg" alt="CI status for browser tests">

## Example

```js
import Uppy from "@growthcloud/core";
import RemoteSources from "@growthcloud/remote-sources";

const uppy = new Uppy();
uppy.use(RemoteSources, {
  companionUrl: "https://your-companion-url",
});
```

## Installation

```bash
npm install @growthcloud/remote-sources
# or
yarn add @growthcloud/remote-sources
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy.RemoteSources` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/remote-sources).

## License

[The MIT License](./LICENSE).
