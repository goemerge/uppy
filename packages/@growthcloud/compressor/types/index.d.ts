import type { PluginOptions, BasePlugin } from "@growthcloud/core";
import { UppyFile } from "@growthcloud/utils";
import type CompressorLocale from "./generatedLocale";

export interface CompressorOptions extends PluginOptions {
  quality?: number;
  limit?: number;
  locale?: CompressorLocale;
}

export type CompressorCompleteCallback<TMeta> = (
  files: UppyFile<TMeta>[]
) => void;

declare module "@growthcloud/core" {
  export interface UppyEventMap<TMeta> {
    "compressor:complete": CompressorCompleteCallback<TMeta>;
  }
}

declare class Compressor extends BasePlugin<CompressorOptions> {}

export default Compressor;
