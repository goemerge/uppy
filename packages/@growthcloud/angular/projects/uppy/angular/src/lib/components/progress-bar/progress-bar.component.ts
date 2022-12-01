import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Uppy } from '@growthcloud/core';
import ProgressBar from '@growthcloud/progress-bar';
import type { ProgressBarOptions } from '@growthcloud/progress-bar';
import { UppyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'uppy-progress-bar',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent
  extends UppyAngularWrapper
  implements OnDestroy, OnChanges
{
  @Input() uppy: Uppy = new Uppy();
  @Input() props: ProgressBarOptions = {};

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount(
      { id: 'angular:ProgressBar', target: this.el.nativeElement },
      ProgressBar
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, ProgressBar);
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
