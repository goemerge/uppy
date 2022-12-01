import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";
import type {
  PublicProviderOptions,
  TokenStorage,
} from "@growthcloud/companion-client";

export interface DropboxOptions extends PluginOptions, PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class Dropbox extends UIPlugin<DropboxOptions> {}

export default Dropbox;
