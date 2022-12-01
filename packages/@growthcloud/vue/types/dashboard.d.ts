import Vue from "vue";
import type { Uppy, UIPlugin, BasePlugin } from "@growthcloud/core";
import type DashboardPlugin from "@growthcloud/dashboard";

interface Data {
  plugin: DashboardPlugin;
}
interface Props {
  uppy: Uppy;
  props: Record<string, unknown>;
  plugins: Array<UIPlugin | BasePlugin>;
}
interface Methods {
  installPlugin(): void;
  uninstallPlugin(uppy: Uppy): void;
}
declare const exports: import("vue/types/vue").ExtendedVue<
  Vue,
  Data,
  Methods,
  unknown,
  Props
>;
export default exports;
