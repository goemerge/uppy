# @growthcloud/transloadit

## 3.0.2

Released: 2022-09-25
Included in: Uppy v3.1.0

- @growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/companion-client,@growthcloud/companion,@growthcloud/compressor,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/drop-target,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/locales,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/provider-views,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/remote-sources,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/svelte,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/utils,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 3.0.1

Released: 2022-08-30
Included in: Uppy v3.0.1

- @growthcloud/transloadit: improve deprecation notice (Antoine du Hamel / #4056)

## 3.0.0

Released: 2022-08-22
Included in: Uppy v3.0.0

- Switch to ESM

## 3.0.0-beta.4

Released: 2022-08-03
Included in: Uppy v3.0.0-beta.4

- @growthcloud/transloadit: remove static properties in favor of exports (Antoine du Hamel / #3927)

## 3.0.0-beta

Released: 2022-05-30
Included in: Uppy v3.0.0-beta

- @growthcloud/transloadit: remove IE 10 hack (Antoine du Hamel / #3777)

## 2.3.6

Released: 2022-08-02
Included in: Uppy v2.13.2

- @growthcloud/transloadit: send `assembly-cancelled` only once (Antoine du Hamel / #3937)

## 2.3.5

Released: 2022-07-27
Included in: Uppy v2.13.1

- @growthcloud/transloadit: cancel assemblies when all its files have been removed (Antoine du Hamel / #3893)

## 2.3.4

Released: 2022-07-18
Included in: Uppy v2.13.0

- @growthcloud/transloadit: fix outdated file ids and incorrect usage of files (Merlijn Vos / #3886)

## 2.3.3

Released: 2022-07-11
Included in: Uppy v2.12.3

- @growthcloud/transloadit: fix TypeError when file is cancelled asynchronously (Antoine du Hamel / #3872)
- @growthcloud/robodog,@growthcloud/transloadit: use modern syntax to simplify code (Antoine du Hamel / #3873)

## 2.3.2

Released: 2022-07-06
Included in: Uppy v2.12.2

- @growthcloud/locales,@growthcloud/transloadit: Fix undefined error in in onTusError (Merlijn Vos / #3848)

## 2.3.1

Released: 2022-06-09
Included in: Uppy v2.12.1

- @growthcloud/transloadit: fix `COMPANION_PATTERN` export (Antoine du Hamel / #3820)

## 2.3.0

Released: 2022-05-30
Included in: Uppy v2.11.0

- @growthcloud/angular,@growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/robodog,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @growthcloud/transloadit: refactor to ESM (Antoine du Hamel / #3725)
- @growthcloud/transloadit: transloadit: propagate error details when creating Assembly fails (Renée Kooi / #3794)

## 2.2.0

Released: 2022-05-14
Included in: Uppy v2.10.0

- @growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/core,@growthcloud/react,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)
- @growthcloud/transloadit: add rate limiting for assembly creation and status polling (Antoine du Hamel / #3718)

## 2.1.5

Released: 2022-04-27
Included in: Uppy v2.9.4

- @growthcloud/transloadit: improve fetch error handling (Antoine du Hamel / #3637)

## 2.1.4

Released: 2022-04-07
Included in: Uppy v2.9.2

- @growthcloud/aws-s3,@growthcloud/companion-client,@growthcloud/transloadit,@growthcloud/utils: Propagate `isNetworkError` through error wrappers (Renée Kooi / #3620)

## 2.1.2

Released: 2022-03-24
Included in: Uppy v2.9.0

- @growthcloud/transloadit: close assembly if upload is cancelled (Antoine du Hamel / #3591)

## 2.1.1

Released: 2022-01-12
Included in: Uppy v2.4.1

- @growthcloud/transloadit: fix handling of Tus errors and rate limiting (Antoine du Hamel / #3429)
- @growthcloud/transloadit: simplify `#onTusError` (Antoine du Hamel / #3419)

## 2.1.0

Released: 2022-01-10
Included in: Uppy v2.4.0

- @growthcloud/transloadit: ignore rate limiting errors when polling (Antoine du Hamel / #3418)
- @growthcloud/transloadit: better defaults for rate limiting (Antoine du Hamel / #3414)

## 2.0.5

Released: 2021-12-07
Included in: Uppy v2.3.0

- @growthcloud/aws-s3,@growthcloud/box,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/instagram,@growthcloud/locales,@growthcloud/onedrive,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/url,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: Refactor locale scripts & generate types and docs (Merlijn Vos / #3276)
