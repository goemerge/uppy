import type { PluginOptions, UIPlugin } from "@growthcloud/core";

type ReduxDevToolsOptions = PluginOptions;

declare class ReduxDevTools extends UIPlugin<ReduxDevToolsOptions> {}

export default ReduxDevTools;
