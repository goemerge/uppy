import type {
  PluginOptions,
  UIPlugin,
  PluginTarget,
  IndexedObject,
} from "@growthcloud/core";
import type { RequestClientOptions } from "@growthcloud/companion-client";
import UrlLocale from "./generatedLocale";

export interface UrlOptions extends PluginOptions, RequestClientOptions {
  target?: PluginTarget;
  title?: string;
  locale?: UrlLocale;
}

declare class Url extends UIPlugin<UrlOptions> {
  public addFile(
    url: string,
    meta?: IndexedObject<any>
  ): undefined | string | never;
}

export default Url;
