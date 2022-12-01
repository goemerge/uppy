import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";
import type AudioLocale from "./generatedLocale";

export interface AudioOptions extends PluginOptions {
  target?: PluginTarget;
  showAudioSourceDropdown?: boolean;
  locale?: AudioLocale;
}

declare class Audio extends UIPlugin<AudioOptions> {}

export default Audio;
