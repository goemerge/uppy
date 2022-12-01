# @growthcloud/tus

## 3.0.5

Released: 2022-11-10
Included in: Uppy v3.3.0

- @growthcloud/aws-s3-multipart,@growthcloud/tus: fix `Timed out waiting for socket` (Antoine du Hamel / #4177)

## 3.0.4

Released: 2022-10-24
Included in: Uppy v3.2.2

- @growthcloud/aws-s3,@growthcloud/tus,@growthcloud/xhr-upload: replace `this.getState().files` with `this.uppy.getState().files` (Artur Paikin / #4167)

## 3.0.2

Released: 2022-09-25
Included in: Uppy v3.1.0

- @growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/companion-client,@growthcloud/companion,@growthcloud/compressor,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/drop-target,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/locales,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/provider-views,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/remote-sources,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/svelte,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/utils,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 3.0.0

Released: 2022-08-22
Included in: Uppy v3.0.0

- @growthcloud/aws-s3,@growthcloud/tus,@growthcloud/xhr-upload: @growthcloud/tus, @growthcloud/xhr-upload, @growthcloud/aws-s3: `metaFields` -> `allowedMetaFields` (Merlijn Vos / #4023)
- @growthcloud/tus: avoid crashing when Tus client reports an error (Antoine du Hamel / #4019)
- @growthcloud/tus: fix dependencies (Antoine du Hamel / #3923)
- @growthcloud/tus: add file argument to `onBeforeRequest` (Merlijn Vos / #3984)
- Switch to ESM

## 3.0.0-beta.2

Released: 2022-08-03
Included in: Uppy v3.0.0-beta.4

- @growthcloud/companion,@growthcloud/tus: Upgrade tus-js-client to 3.0.0 (Merlijn Vos / #3942)

## 2.4.2

Released: 2022-08-02
Included in: Uppy v2.13.2

- @growthcloud/tus: fix dependencies (Antoine du Hamel / #3923)

## 2.4.1

Released: 2022-06-07
Included in: Uppy v2.12.0

- @growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/tus: queue socket token requests for remote files (Merlijn Vos / #3797)
- @growthcloud/tus: make onShouldRetry type optional (Merlijn Vos / #3800)

## 2.4.0

Released: 2022-05-30
Included in: Uppy v2.11.0

- @growthcloud/angular,@growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/robodog,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @growthcloud/tus: Add `onShouldRetry` as option to @growthcloud/tus (Merlijn Vos / #3720)
- @growthcloud/tus: fix broken import (Antoine du Hamel / #3729)
- @growthcloud/tus: fixup! @growthcloud/tus: wait for user promise on beforeRequest (Antoine du Hamel / #3712)
- @growthcloud/tus: wait for user promise on beforeRequest (Antoine du Hamel / #3712)

## 2.3.0

Released: 2022-05-14
Included in: Uppy v2.10.0

- @growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/core,@growthcloud/react,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)
- @growthcloud/tus: refactor to ESM (Antoine du Hamel / #3724)

## 2.2.2

Released: 2022-03-29
Included in: Uppy v2.9.1

- @growthcloud/tus: fix hasOwn (Mikael Finstad / #3604)

## 2.2.1

Released: 2022-03-24
Included in: Uppy v2.9.0

- @growthcloud/tus: fix double requests sent when rate limiting (Antoine du Hamel / #3595)

## 2.2.0

Released: 2022-01-10
Included in: Uppy v2.4.0

- @growthcloud/tus: pause all requests in response to server rate limiting (Antoine du Hamel / #3394)
