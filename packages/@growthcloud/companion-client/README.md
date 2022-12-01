# @growthcloud/companion-client

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@growthcloud/companion-client.svg?style=flat-square)](https://www.npmjs.com/package/@growthcloud/companion-client)
![CI status for Uppy tests](https://github.com/goemerge/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/goemerge/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/goemerge/uppy/workflows/End-to-end%20tests/badge.svg)

Client library for communication with Companion. Intended for use in Uppy plugins.

Uppy is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Uppy from "@growthcloud/core";
import { Provider, RequestClient, Socket } from "@growthcloud/companion-client";

const uppy = new Uppy();

const client = new RequestClient(uppy, {
  companionUrl: "https://uppy.mywebsite.com/",
});
client.get("/drive/list").then(() => {});

const provider = new Provider(uppy, {
  companionUrl: "https://uppy.mywebsite.com/",
  provider: providerPluginInstance,
});
provider.checkAuth().then(() => {});

const socket = new Socket({ target: "wss://uppy.mywebsite.com/" });
socket.on("progress", () => {});
```

## Installation

> Unless you are writing a custom provider plugin, you do not need to install this.

```bash
$ npm install @growthcloud/companion-client
```

<!-- Undocumented currently
## Documentation

Documentation for this plugin can be found on the [Uppy website](https://uppy.io/docs/DOC_PAGE_HERE).
-->

## License

[The MIT License](./LICENSE).
