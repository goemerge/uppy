import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import { Uppy } from '@growthcloud/core';
import DragDrop from '@growthcloud/drag-drop';
import type { DragDropOptions } from '@growthcloud/drag-drop';
import { UppyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'uppy-drag-drop',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragDropComponent
  extends UppyAngularWrapper
  implements OnDestroy, OnChanges
{
  @Input() uppy: Uppy = new Uppy();
  @Input() props: DragDropOptions = {};

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount(
      { id: 'angular:DragDrop', target: this.el.nativeElement },
      DragDrop
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, DragDrop);
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
