import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";

interface InformerOptions extends PluginOptions {
  target?: PluginTarget;
}

declare class Informer extends UIPlugin<InformerOptions> {}

export default Informer;
