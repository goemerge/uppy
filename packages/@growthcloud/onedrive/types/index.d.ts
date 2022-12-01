import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";
import type {
  PublicProviderOptions,
  TokenStorage,
} from "@growthcloud/companion-client";

export interface OneDriveOptions extends PluginOptions, PublicProviderOptions {
  target?: PluginTarget;
  title?: string;
  storage?: TokenStorage;
}

declare class OneDrive extends UIPlugin<OneDriveOptions> {}

export default OneDrive;
