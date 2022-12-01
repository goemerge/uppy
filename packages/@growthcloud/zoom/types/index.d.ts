import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";
import type {
  TokenStorage,
  PublicProviderOptions,
} from "@growthcloud/companion-client";

interface ZoomOptions extends PluginOptions, PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class Zoom extends UIPlugin<ZoomOptions> {}

export default Zoom;
