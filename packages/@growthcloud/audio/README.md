# @growthcloud/audio

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

<a href="https://www.npmjs.com/package/@growthcloud/audio"><img src="https://img.shields.io/npm/v/@growthcloud/webcam.svg?style=flat-square"></a> <img src="https://github.com/goemerge/uppy/workflows/Tests/badge.svg" alt="CI status for Uppy tests"> <img src="https://github.com/goemerge/uppy/workflows/Companion/badge.svg" alt="CI status for Companion tests"> <img src="https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg" alt="CI status for browser tests">

The Audio plugin for Uppy lets you record audio using a built-in or external microphone, or any other audio device, on desktop and mobile.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import Webcam from "@growthcloud/audio";

const uppy = new Uppy();
uppy.use(Audio);
```

## Installation

```bash
$ npm install @growthcloud/audio
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/webcam).

## License

[The MIT License](./LICENSE).
