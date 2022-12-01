import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";
import type {
  PublicProviderOptions,
  TokenStorage,
} from "@growthcloud/companion-client";

export interface FacebookOptions extends PluginOptions, PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class Facebook extends UIPlugin<FacebookOptions> {}

export default Facebook;
