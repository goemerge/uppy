# @growthcloud/form

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/form.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/form)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

The Form plugin collects metadata from any specified `<form>` element, right before Uppy begins uploading/processing files. It optionally appends results back to the form. The appended result is a stringified version of a result returned from `uppy.upload()`.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import Form from "@growthcloud/form";

const uppy = new Uppy();
uppy.use(Form, {
  target: document.querySelector("form"),
  getMetaFromForm: true,
  addResultToForm: true,
  resultName: "uppyResult",
  submitOnSuccess: true,
});
```

## Installation

```bash
$ npm install @growthcloud/form
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/form).

## License

[The MIT License](./LICENSE).
