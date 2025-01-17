# @growthcloud/provider-views

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/provider-views.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/provider-views)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

View library for Uppy remote provider plugins.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Plugin from "@growthcloud/core/lib/plugin";
import { ProviderViews } from "@growthcloud/provider-views";

class GoogleDrive extends UIPlugin {
  install() {
    this.view = new ProviderViews(this);
    // snip
  }

  onFirstRender() {
    return Promise.all([
      this.provider.fetchPreAuthToken(),
      this.view.getFolder("root", "/"),
    ]);
  }

  render(state) {
    return this.view.render(state);
  }
}
```

## Installation

> Unless you are creating a custom provider plugin, you do not need to install this.

```bash
$ npm install @growthcloud/provider-views
```

<!-- Undocumented currently
## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/DOC_PAGE_HERE).
-->

## License

[The MIT License](./LICENSE).
