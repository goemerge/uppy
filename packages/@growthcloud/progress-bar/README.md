# @growthcloud/progress-bar

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/progress-bar.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/progress-bar)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

ProgressBar is a minimalist plugin that shows the current upload progress in a thin bar element. Like the ones used by YouTube and GitHub when navigating between pages.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import ProgressBar from "@growthcloud/progress-bar";

const uppy = new Uppy();
uppy.use(ProgressBar, {
  // Options
});
```

## Installation

```bash
$ npm install @growthcloud/progress-bar
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/progressbar).

## License

[The MIT License](./LICENSE).
