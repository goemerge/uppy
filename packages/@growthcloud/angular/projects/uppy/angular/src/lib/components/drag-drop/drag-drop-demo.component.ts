import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as DragDrop from '@growthcloud/drag-drop';
import { Uppy } from '@growthcloud/core';

@Component({
  selector: 'uppy-drag-drop-demo',
  template: ` <uppy-drag-drop [uppy]="uppy" [props]="props"></uppy-drag-drop> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragDropDemoComponent {
  uppy: Uppy = new Uppy({ debug: true, autoProceed: true });
  props: DragDrop.DragDropOptions = {};
}
