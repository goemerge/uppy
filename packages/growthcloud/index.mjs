// Core
export { default as Uppy, debugLogger } from "@growthcloud/core";

/**
 * @deprecated Use `Uppy` instead of `Core`
 */
export function Core() {
  throw new Error("Core has been renamed to Uppy");
}

// Utilities
export * as server from "@growthcloud/companion-client";

import * as ProviderView from "@growthcloud/provider-views";
export const views = { ProviderView };

// Stores
export { default as DefaultStore } from "@growthcloud/store-default";
export { default as ReduxStore } from "@growthcloud/store-redux";

// UI plugins
export { default as Dashboard } from "@growthcloud/dashboard";
export { default as DragDrop } from "@growthcloud/drag-drop";
export { default as DropTarget } from "@growthcloud/drop-target";
export { default as FileInput } from "@growthcloud/file-input";
export { default as ImageEditor } from "@growthcloud/image-editor";
export { default as Informer } from "@growthcloud/informer";
export { default as ProgressBar } from "@growthcloud/progress-bar";
export { default as StatusBar } from "@growthcloud/status-bar";

// Acquirers
export { default as Audio } from "@growthcloud/audio";
export { default as Box } from "@growthcloud/box";
export { default as Dropbox } from "@growthcloud/dropbox";
export { default as Facebook } from "@growthcloud/facebook";
export { default as GoogleDrive } from "@growthcloud/google-drive";
export { default as Instagram } from "@growthcloud/instagram";
export { default as OneDrive } from "@growthcloud/onedrive";
export { default as RemoteSources } from "@growthcloud/remote-sources";
export { default as ScreenCapture } from "@growthcloud/screen-capture";
export { default as Unsplash } from "@growthcloud/unsplash";
export { default as Url } from "@growthcloud/url";
export { default as Webcam } from "@growthcloud/webcam";
export { default as Zoom } from "@growthcloud/zoom";

// Uploaders
export { default as AwsS3 } from "@growthcloud/aws-s3";
export { default as AwsS3Multipart } from "@growthcloud/aws-s3-multipart";
export { default as Transloadit } from "@growthcloud/transloadit";
export { default as Tus } from "@growthcloud/tus";
export { default as XHRUpload } from "@growthcloud/xhr-upload";

// Miscellaneous
export { default as Compressor } from "@growthcloud/compressor";
export { default as Form } from "@growthcloud/form";
export { default as GoldenRetriever } from "@growthcloud/golden-retriever";
export { default as ReduxDevTools } from "@growthcloud/redux-dev-tools";
export { default as ThumbnailGenerator } from "@growthcloud/thumbnail-generator";

// Special hack for Transloadit static exports
import Transloadit, {
  COMPANION_URL,
  COMPANION_ALLOWED_HOSTS,
} from "@growthcloud/transloadit";
Transloadit.COMPANION_URL = COMPANION_URL;
Transloadit.COMPANION_ALLOWED_HOSTS = COMPANION_ALLOWED_HOSTS;

export const locales = {};
