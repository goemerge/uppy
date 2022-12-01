import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";

export interface ProgressBarOptions extends PluginOptions {
  target?: PluginTarget;
  hideAfterFinish?: boolean;
  fixed?: boolean;
}

declare class ProgressBar extends UIPlugin<ProgressBarOptions> {}

export default ProgressBar;
