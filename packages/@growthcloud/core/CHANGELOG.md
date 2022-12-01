# @growthcloud/core

## 3.0.4

Released: 2022-10-24
Included in: Uppy v3.2.2

- @growthcloud/core: make cancel() and close() arguments optional in types (Merlijn Vos / #4161)

## 3.0.3

Released: 2022-10-19
Included in: Uppy v3.2.0

- @growthcloud/core: do not crash if a file is removed before the upload starts (Antoine du Hamel / #4148)
- @growthcloud/core: Fix Uppy.cancelAll and Uppy.close types (Sven Grunewaldt / #4128)

## 3.0.2

Released: 2022-09-25
Included in: Uppy v3.1.0

- @growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/companion-client,@growthcloud/companion,@growthcloud/compressor,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/drop-target,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/locales,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/provider-views,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/remote-sources,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/svelte,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/utils,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)
- @growthcloud/core: Fix `Restrictor` counts ghost files against `maxNumberOfFiles` (Andrew McIntee / #4078)
- @growthcloud/core: fix types (Antoine du Hamel / #4072)

## 3.0.1

Released: 2022-08-30
Included in: Uppy v3.0.1

- @growthcloud/core,@growthcloud/dashboard,@growthcloud/thumbnail-generator: update definition type files for TS 4.8 compatibility (Antoine du Hamel / #4055)

## 3.0.0

Released: 2022-08-22
Included in: Uppy v3.0.0

- @growthcloud/core: core: uppy.addFile should accept browser File objects (Artur Paikin / #4020)
- @growthcloud/core,@growthcloud/dashboard,@growthcloud/status-bar: Style tweaks: use all: initial + other resets (Artur Paikin / #3983)
- Switch to ESM

## 3.0.0-beta.4

Released: 2022-08-16
Included in: Uppy v3.0.0-beta.5

- @growthcloud/core,@growthcloud/react: Fix all breaking todo comments for 3.0 (Merlijn Vos / #3907)

## 3.0.0-beta.2

Released: 2022-07-27
Included in: Uppy v3.0.0-beta.3

- @growthcloud/aws-s3,@growthcloud/core,@growthcloud/dashboard,@growthcloud/store-redux,@growthcloud/xhr-upload: upgrade `nanoid` to v4 (Antoine du Hamel / #3904)

## 3.0.0-beta.1

Released: 2022-06-09
Included in: Uppy v3.0.0-beta.1

- @growthcloud/core,@growthcloud/dashboard: fix types for some events (Antoine du Hamel / #3812)

## 2.3.2

Released: 2022-07-27
Included in: Uppy v2.13.1

- @growthcloud/core: Add missing type for retry-all event (Luc Boissaye / #3901)

## 2.3.1

Released: 2022-06-07
Included in: Uppy v2.12.0

- @growthcloud/core: fix `TypeError` when file was deleted (Antoine du Hamel / #3811)

## 2.3.0

Released: 2022-05-30
Included in: Uppy v2.11.0

- @growthcloud/angular,@growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/robodog,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: doc: update bundler recommendation (Antoine du Hamel / #3763)
- @growthcloud/core: refactor to ESM (Antoine du Hamel / #3744)

## 2.2.0

Released: 2022-05-14
Included in: Uppy v2.10.0

- @growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/core,@growthcloud/react,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/xhr-upload: proposal: Cancel assemblies optional (Mikael Finstad / #3575)
- @growthcloud/core: add definition for addFiles method (Matteo Padovano / #3556)
- @growthcloud/core: wrap plugins in div.uppy-Root and set dir attrubute in UIPlugin (Artur Paikin / #3692)

## 2.1.10

Released: 2022-04-27
Included in: Uppy v2.9.5

- @growthcloud/core: fix `TypeError` when file was removed (Antoine du Hamel / #3670)

## 2.1.9

Released: 2022-04-27
Included in: Uppy v2.9.4

- @growthcloud/core: fix `TypeError` when file was removed (Antoine du Hamel / #3650)

## 2.1.8

Released: 2022-04-07
Included in: Uppy v2.9.3

- @growthcloud/core: fix TypeError in event handler when file was removed (Antoine du Hamel / #3629)

## 2.1.7

Released: 2022-03-29
Included in: Uppy v2.9.1

- @growthcloud/core: refactor: replace deprecated String.prototype.substr() (CommanderRoot / #3600)

## 2.1.6

Released: 2022-03-16
Included in: Uppy v2.8.0

- @growthcloud/core: Abstract restriction logic in a new Restricter class (Merlijn Vos / #3532)

## 2.1.5

Released: 2022-02-14
Included in: Uppy v2.5.0

- @growthcloud/core,@growthcloud/dashboard,@growthcloud/thumbnail-generator: Add dashboard and UIPlugin types (Merlijn Vos / #3426)

## 2.1.4

Released: 2021-12-09
Included in: Uppy v2.3.1

- @growthcloud/aws-s3,@growthcloud/core,@growthcloud/dashboard,@growthcloud/store-redux,@growthcloud/xhr-upload: deps: use `nanoid/non-secure` to workaround react-native limitation (Antoine du Hamel / #3350)

## 2.1.3

Released: 2021-12-07
Included in: Uppy v2.3.0

- @growthcloud/core: disable loose transpilation for legacy bundle (Antoine du Hamel / #3329)
- @growthcloud/aws-s3,@growthcloud/box,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/instagram,@growthcloud/locales,@growthcloud/onedrive,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/url,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: Refactor locale scripts & generate types and docs (Merlijn Vos / #3276)
