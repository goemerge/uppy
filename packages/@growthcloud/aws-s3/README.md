# @growthcloud/aws-s3

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/aws-s3.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/aws-s3)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

The AwsS3 plugin can be used to upload files directly to an S3 bucket. Uploads can be signed using Companion or a custom signing function.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import AwsS3 from "@growthcloud/aws-s3";

const uppy = new Uppy();
uppy.use(AwsS3, {
  limit: 2,
  timeout: ms("1 minute"),
  companionUrl: "https://companion.myapp.com/",
});
```

## Installation

```bash
$ npm install @growthcloud/aws-s3
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/aws-s3).

## License

[The MIT License](./LICENSE).
