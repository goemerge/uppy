# @growthcloud/companion

## 4.1.1

Released: 2022-11-16
Included in: Uppy v3.3.1

- @growthcloud/companion: send expire info for non-multipart uploads (Antoine du Hamel / #4214)

## 4.1.0

Released: 2022-11-10
Included in: Uppy v3.3.0

- @growthcloud/companion: change default S3 expiry from 300 to 800 seconds (Merlijn Vos / #4206)
- @growthcloud/companion: send expiry time along side S3 signed requests (Antoine du Hamel / #4202)

## 4.0.4

Released: 2022-10-19
Included in: Uppy v3.2.0

- @growthcloud/companion: add workaround for S3 accelerated endpoints (Mikael Finstad / #4140)
- @growthcloud/companion: fix error message (Mikael Finstad / #4125)

## 4.0.2

Released: 2022-09-25
Included in: Uppy v3.1.0

- @growthcloud/companion: Companion throttle progress by time (Mikael Finstad / #4101)
- @growthcloud/audio,@growthcloud/aws-s3-multipart,@growthcloud/aws-s3,@growthcloud/box,@growthcloud/companion-client,@growthcloud/companion,@growthcloud/compressor,@growthcloud/core,@growthcloud/dashboard,@growthcloud/drag-drop,@growthcloud/drop-target,@growthcloud/dropbox,@growthcloud/facebook,@growthcloud/file-input,@growthcloud/form,@growthcloud/golden-retriever,@growthcloud/google-drive,@growthcloud/image-editor,@growthcloud/informer,@growthcloud/instagram,@growthcloud/locales,@growthcloud/onedrive,@growthcloud/progress-bar,@growthcloud/provider-views,@growthcloud/react,@growthcloud/redux-dev-tools,@growthcloud/remote-sources,@growthcloud/screen-capture,@growthcloud/status-bar,@growthcloud/store-default,@growthcloud/store-redux,@growthcloud/svelte,@growthcloud/thumbnail-generator,@growthcloud/transloadit,@growthcloud/tus,@growthcloud/unsplash,@growthcloud/url,@growthcloud/utils,@growthcloud/vue,@growthcloud/webcam,@growthcloud/xhr-upload,@growthcloud/zoom: add missing entries to changelog for individual packages (Antoine du Hamel / #4092)

## 4.0.1

Released: 2022-08-30
Included in: Uppy v3.0.1

- @growthcloud/companion: Fix Companion license (Merlijn Vos / #4044)

## 4.0.0

Released: 2022-08-22
Included in: Uppy v3.0.0

- Switch to ESM

## 4.0.0-beta.4

Released: 2022-08-16
Included in: Uppy v3.0.0-beta.5

- @growthcloud/companion: Companion: bring back default upload protocol (Mikael Finstad / #3967)
- @growthcloud/companion: enforce usage of uploadUrls (Mikael Finstad / #3965)
- @growthcloud/companion: fix crash if redis disconnects (Mikael Finstad / #3954)
- @growthcloud/companion: upgrade `ws` version (Antoine du Hamel / #3949)
- @growthcloud/companion: sort Dropbox response & refactor to async/await (Mikael Finstad / #3897)
- @growthcloud/companion: fix default getKey for non-standalone too (Mikael Finstad / #3945)
- @growthcloud/companion: remove `isobject` from dependencies (Antoine du Hamel / #3948)
- @growthcloud/companion: show deprecation message when using legacy s3 options (Antoine du Hamel / #3944)

## 4.0.0-beta.3

Released: 2022-08-03
Included in: Uppy v3.0.0-beta.4

- @growthcloud/companion,@growthcloud/tus: Upgrade tus-js-client to 3.0.0 (Merlijn Vos / #3942)

## 4.0.0-beta.2

Released: 2022-07-27
Included in: Uppy v3.0.0-beta.3

- @growthcloud/companion: update minimal supported Node.js version in the docs (Antoine du Hamel / #3902)
- @growthcloud/companion: upgrade `redis` to version 4.x (Antoine du Hamel / #3589)
- @growthcloud/companion: remove unnecessary ts-ignores (Mikael Finstad / #3900)
- @growthcloud/companion: remove `COMPANION_S3_GETKEY_SAFE_BEHAVIOR` env variable (Antoine du Hamel / #3869)

## 4.0.0-beta.1

Released: 2022-07-06
Included in: Uppy v3.0.0-beta.2

- @growthcloud/companion: remove deprecated duplicated metrics (Mikael Finstad / #3833)
- @growthcloud/companion: Companion 3 default to no s3 acl (Mikael Finstad / #3826)
- @growthcloud/companion: rewrite companion.app() to return an object (Mikael Finstad / #3827)
- @growthcloud/companion: remove companion provider compat api (Mikael Finstad / #3828)
- @growthcloud/companion: rewrite code for node >=14 (Mikael Finstad / #3829)
- @growthcloud/companion: remove chunkSize backwards compatibility (Mikael Finstad / #3830)
- @growthcloud/companion: Companion: make `emitSuccess` and `emitError` private (Mikael Finstad / #3832)
- @growthcloud/companion: do not use a default upload protocol (Mikael Finstad / #3834)

## 4.0.0-beta

Released: 2022-05-30
Included in: Uppy v3.0.0-beta

- @growthcloud/companion: remove `searchProviders` wrapper & move `s3` options (Merlijn Vos / #3781)
- @growthcloud/companion: remove support for EOL versions of Node.js (Antoine du Hamel / #3784)

## 3.7.1

Released: 2022-07-27
Included in: Uppy v2.13.1

- @growthcloud/companion: Companion app type (Mikael Finstad / #3899)

## 3.7.0

Released: 2022-07-06
Included in: Uppy v2.12.2

- @growthcloud/companion: Getkey safe behavior (Mikael Finstad / #3592)
- @growthcloud/companion: doc: fix Google Drive example (Antoine du Hamel / #3855)
- @growthcloud/companion: build an ARM64 container (Stuart Auld / #3841)

## 3.6.0

Released: 2022-05-30
Included in: Uppy v2.11.0

- @growthcloud/companion: expire redis keys after 1 day (Mikael Finstad / #3771)
- @growthcloud/companion: fix some linter warnings (Antoine du Hamel / #3752)

## 3.5.2

Released: 2022-04-27
Included in: Uppy v2.9.5

- @growthcloud/companion: Bump moment from 2.29.1 to 2.29.2 (dependabot[bot] / #3635)

## 3.5.0

Released: 2022-03-24
Included in: Uppy v2.9.0

- @growthcloud/companion: Companion server upload events (Mikael Finstad / #3544)
- @growthcloud/companion: fix `yarn test` command (Antoine du Hamel / #3590)
- @growthcloud/companion: Allow setting no ACL (Mikael Finstad / #3577)
- @growthcloud/companion: Small companion code and doc changes (Mikael Finstad / #3586)

## 3.4.0

Released: 2022-03-16
Included in: Uppy v2.8.0

- @growthcloud/companion: always log errors with stack trace (Mikael Finstad / #3573)
- @growthcloud/companion: Companion refactor (Mikael Finstad / #3542)
- @growthcloud/companion: Fetch all Google Drive shared drives (Robert DiMartino / #3553)
- @growthcloud/companion: Order Google Drive results by folder to show all folders first (Robert DiMartino / #3546)
- @growthcloud/companion: upgrade node-redis-pubsub (Mikael Finstad / #3541)
- @growthcloud/companion: reorder reqToOptions (Antoine du Hamel / #3530)

## 3.3.1

Released: 2022-03-02
Included in: Uppy v2.7.0

- @growthcloud/companion: fix unstable test (Mikael Finstad)
- @growthcloud/companion: replace debug (Mikael Finstad)
- @growthcloud/companion: Fix COMPANION_PATH (Mikael Finstad / #3515)
- @growthcloud/companion: Upload protocol "s3-multipart" does not use the chunkSize option (Gabi Ganam / #3511)

## 3.3.0

Released: 2022-02-17
Included in: Uppy v2.6.0

- @growthcloud/companion: fix unpslash author meta, sanitize metadata to strings and improve companion tests (Mikael Finstad / #3478)

## 3.2.1

Released: 2022-02-16
Included in: Uppy v2.5.1

- @growthcloud/companion: fix periodicPingUrls oops (Mikael Finstad / #3490)

## 3.2.0

Released: 2022-02-14
Included in: Uppy v2.5.0

- @growthcloud/companion: add support for COMPANION_UNSPLASH_SECRET (Mikael Finstad / #3463)
- @growthcloud/companion-client,@growthcloud/companion,@growthcloud/provider-views,@growthcloud/robodog: Finishing touches on Companion dynamic Oauth (Renée Kooi / #2802)
- @growthcloud/companion: fix broken thumbnails for box and dropbox (Mikael Finstad / #3460)
- @growthcloud/companion: Implement periodic ping functionality (Mikael Finstad / #3246)
- @growthcloud/companion: fix callback urls (Mikael Finstad / #3458)
- @growthcloud/companion: Fix TypeError when invalid initialization vector (Julian Gruber / #3416)
- @growthcloud/companion: Default to HEAD requests when the Companion looks to get meta information about a URL (Zack Bloom / #3417)

## 3.1.5

Released: 2022-01-04
Included in: Uppy v2.3.3

- @growthcloud/companion: improve private ip check (Mikael Finstad / #3403)

## 3.1.4

Released: 2021-12-21
Included in: Uppy v2.3.2

- @growthcloud/angular,@growthcloud/companion,@growthcloud/svelte,@growthcloud/vue: add `.npmignore` files to ignore `.gitignore` when packing (Antoine du Hamel / #3380)
- @growthcloud/companion: Upgrade ws in companion (Merlijn Vos / #3377)

## 3.1.3

Released: 2021-12-09
Included in: Uppy v2.3.1

- @growthcloud/companion: fix Dockerfile and deploy automation (Mikael Finstad / #3355)
- @growthcloud/companion: don't pin Yarn version in `package.json` (Antoine du Hamel / #3347)

## 3.1.2

Released: 2021-12-07
Included in: Uppy v2.3.0

- @growthcloud/companion: fix deploy Yarn version (Antoine du Hamel / #3327)
- @growthcloud/companion: upgrade aws-sdk (Mikael Finstad / #3334)
- @growthcloud/companion: Remove references of incorrect `options` argument for `companion.socket` (Mikael Finstad / #3307)
- @growthcloud/companion: Upgrade linting to 2.0.0-0 (Kevin van Zonneveld / #3280)
