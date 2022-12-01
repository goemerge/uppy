import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";
import type { RequestClientOptions } from "@growthcloud/companion-client";

interface UnsplashOptions extends PluginOptions, RequestClientOptions {
  target?: PluginTarget;
  title?: string;
}

declare class Unsplash extends UIPlugin<UnsplashOptions> {}

export default Unsplash;
