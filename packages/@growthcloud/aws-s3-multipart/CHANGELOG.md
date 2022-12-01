# @growthcloud/aws-s3-multipart

## 3.1.1

Released: 2022-11-16
Included in: Uppy v3.3.1

- @growthcloud/aws-s3-multipart: handle slow connections better (Antoine du Hamel / #4213)
- @growthcloud/aws-s3-multipart: Fix typo in url check (Christian Franke / #4211)

## 3.1.0

Released: 2022-11-10
Included in: Uppy v3.3.0

- @growthcloud/aws-s3-multipart: empty the queue when pausing (Antoine du Hamel / #4203)
- @growthcloud/aws-s3-multipart: refactor rate limiting approach (Antoine du Hamel / #4187)
- @growthcloud/aws-s3-multipart: change limit to 6 (Antoine du Hamel / #4199)
- @growthcloud/aws-s3-multipart: remove unused `timeout` option (Antoine du Hamel / #4186)
- @growthcloud/aws-s3-multipart,@growthcloud/tus: fix `Timed out waiting for socket` (Antoine du Hamel / #4177)

## 3.0.2

Released: 2022-09-25
Included in: Uppy v3.1.0

- @growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/companion-client,@growthcloud/companion,@growthcloud/compressor,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/drop-target,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/locales,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/provider-views,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/remote-sources,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/svelte,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/utils,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 3.0.0

Released: 2022-08-22
Included in: Uppy v3.0.0

- Switch to ESM

## 3.0.0-beta.4

Released: 2022-08-16
Included in: Uppy v3.0.0-beta.5

- @growthcloud/aws-s3-multipart: Fix when using Companion (Merlijn Vos / #3969)
- @growthcloud/aws-s3-multipart: Fix race condition in `#uploadParts` (Morgan Zolob / #3955)
- @growthcloud/aws-s3-multipart: ignore exception inside `abortMultipartUpload` (Antoine du Hamel / #3950)

## 3.0.0-beta.3

Released: 2022-08-03
Included in: Uppy v3.0.0-beta.4

- @growthcloud/aws-s3-multipart: Correctly handle errors for `prepareUploadParts` (Merlijn Vos / #3912)

## 3.0.0-beta.2

Released: 2022-07-27
Included in: Uppy v3.0.0-beta.3

- @growthcloud/aws-s3-multipart: make `headers` part indexed too in `prepareUploadParts` (Merlijn Vos / #3895)

## 2.4.1

Released: 2022-06-07
Included in: Uppy v2.12.0

- @growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/tus: queue socket token requests for remote files (Merlijn Vos / #3797)
- @growthcloud/aws-s3-multipart: allow `companionHeaders` to be modified with `setOptions` (Paulo Lemos Neto / #3770)

## 2.4.0

Released: 2022-05-30
Included in: Uppy v2.11.0

- @growthcloud/angular,@growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/robodog,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @growthcloud/aws-s3-multipart: refactor to ESM (Antoine du Hamel / #3672)

## 2.3.0

Released: 2022-05-14
Included in: Uppy v2.10.0

- @growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/core,@growthcloud/react,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)
- @growthcloud/aws-s3-multipart: export interface AwsS3MultipartOptions (Matteo Padovano / #3709)

## 2.2.2

Released: 2022-04-27
Included in: Uppy v2.9.4

- @growthcloud/aws-s3-multipart: Add `companionCookiesRule` type to @growthcloud/aws-s3-multipart (Mauricio Ribeiro / #3623)

## 2.2.1

Released: 2022-03-02
Included in: Uppy v2.7.0

- @growthcloud/aws-s3-multipart: Add chunks back to prepareUploadParts, indexed by partNumber (Kevin West / #3520)

## 2.2.0

Released: 2021-12-07
Included in: Uppy v2.3.0

- @growthcloud/aws-s3-multipart: Drop `lockedCandidatesForBatch` and mark chunks as 'busy' when preparing (Yegor Yarko / #3342)
