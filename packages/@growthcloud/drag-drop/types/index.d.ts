import type { PluginOptions, UIPlugin, PluginTarget } from "@growthcloud/core";
import DragDropLocale from "./generatedLocale";

export interface DragDropOptions extends PluginOptions {
  target?: PluginTarget;
  inputName?: string;
  allowMultipleFiles?: boolean;
  width?: string | number;
  height?: string | number;
  note?: string;
  locale?: DragDropLocale;
  onDragOver?: (event: DragEvent) => void;
  onDragLeave?: (event: DragEvent) => void;
  onDrop?: (event: DragEvent) => void;
}

declare class DragDrop extends UIPlugin<DragDropOptions> {}

export default DragDrop;
