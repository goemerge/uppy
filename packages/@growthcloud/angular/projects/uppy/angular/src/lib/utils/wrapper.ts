import type { Uppy, UIPlugin } from '@growthcloud/core';
import type { ElementRef, SimpleChanges } from '@angular/core';
import type { DragDropOptions } from '@growthcloud/drag-drop';
import type { StatusBarOptions } from '@growthcloud/status-bar';
import type { ProgressBarOptions } from '@growthcloud/progress-bar';

export abstract class UppyAngularWrapper<
  PluginType extends UIPlugin = UIPlugin
> {
  abstract props: DragDropOptions | StatusBarOptions | ProgressBarOptions;
  abstract el: ElementRef;
  abstract uppy: Uppy;
  private options: any;
  plugin: PluginType | undefined;

  onMount(
    defaultOptions: Record<string, unknown>,
    plugin: new (uppy: Uppy, opts?: Record<string, unknown>) => UIPlugin
  ) {
    this.options = {
      ...defaultOptions,
      ...this.props,
    };

    this.uppy.use(plugin, this.options);
    this.plugin = this.uppy.getPlugin(this.options.id) as PluginType;
  }

  handleChanges(changes: SimpleChanges, plugin: any): void {
    // Without the last part of this conditional, it tries to uninstall before the plugin is mounted
    if (
      changes['uppy'] &&
      this.uppy !== changes['uppy'].previousValue &&
      changes['uppy'].previousValue !== undefined
    ) {
      this.uninstall(changes['uppy'].previousValue);
      this.uppy.use(plugin, this.options);
    }
    this.options = { ...this.options, ...this.props };
    this.plugin = this.uppy.getPlugin(this.options.id) as PluginType;
    if (
      changes['props'] &&
      this.props !== changes['props'].previousValue &&
      changes['props'].previousValue !== undefined
    ) {
      this.plugin.setOptions({ ...this.options });
    }
  }

  uninstall(uppy = this.uppy): void {
    uppy.removePlugin(this.plugin!);
  }
}
