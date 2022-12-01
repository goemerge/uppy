import type {
  IndexedObject,
  PluginOptions,
  UIPlugin,
  UppyFile,
} from "@growthcloud/core";

import ThumbnailGeneratorLocale from "./generatedLocale";

export interface ThumbnailOptions {
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  thumbnailType?: string;
  waitForThumbnailsBeforeUpload?: boolean;
  lazy?: boolean;
}

interface Options extends ThumbnailOptions {
  locale?: ThumbnailGeneratorLocale;
}

declare class ThumbnailGenerator extends UIPlugin<PluginOptions & Options> {}

export default ThumbnailGenerator;

// Events

export type ThumbnailGeneratedCallback<TMeta extends IndexedObject<any>> = (
  file: UppyFile<TMeta>,
  preview: string
) => void;

declare module "@growthcloud/core" {
  export interface UppyEventMap<TMeta> {
    "thumbnail:generated": ThumbnailGeneratedCallback<TMeta>;
  }
}
