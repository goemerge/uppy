# @growthcloud/google-drive

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/google-drive.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/google-drive)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

The Google Drive plugin for Uppy lets users import files from their Google Drive account.

A Companion instance is required for the GoogleDrive plugin to work. Companion handles authentication with Google, downloads files from the Drive and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import GoogleDrive from "@growthcloud/google-drive";

const uppy = new Uppy();
uppy.use(GoogleDrive, {
  // Options
});
```

## Installation

```bash
$ npm install @growthcloud/google-drive
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/google-drive).

## License

[The MIT License](./LICENSE).
