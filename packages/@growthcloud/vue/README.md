# @growthcloud/vue

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/vue.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/vue)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

Vue component wrappers around Uppy’s officially maintained UI plugins.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```vue
<template>
  <dashboard-modal
    :uppy="uppy"
    :open="open"
    :props="{
      onRequestCloseModal: handleClose,
    }"
  />
</template>

<script>
import Uppy from "@growthcloud/core";
import { DashboardModal } from "@growthcloud/vue";

export default {
  components: {
    DashboardModal,
  },
  computed: {
    uppy: () => new Uppy(),
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleClose() {
      this.open = false;
    },
  },
};
</script>
```

## Installation

```bash
$ npm install @growthcloud/vue
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Uppy` will attach itself to the global `window.Uppy` object. See the [main Uppy documentation](https://uppy.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/vue).

## License

[The MIT License](./LICENSE).
