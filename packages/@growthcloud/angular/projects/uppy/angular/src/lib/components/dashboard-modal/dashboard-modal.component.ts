import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import Dashboard from '@growthcloud/dashboard';
import type { DashboardOptions } from '@growthcloud/dashboard';
import { Uppy } from '@growthcloud/core';
import { UppyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'uppy-dashboard-modal',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardModalComponent
  extends UppyAngularWrapper<Dashboard>
  implements OnDestroy, OnChanges
{
  @Input() uppy: Uppy = new Uppy();
  @Input() props: DashboardOptions = {};
  @Input() open: boolean = false;

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount(
      {
        id: 'angular:DashboardModal',
        inline: false,
        target: this.el.nativeElement,
      },
      Dashboard
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, Dashboard);
    // Handle dashboard-modal specific changes
    if (changes['open'] && this.open !== changes['open'].previousValue) {
      if (this.open && !changes['open'].previousValue) {
        this.plugin!.openModal();
      }
      if (!this.open && changes['open'].previousValue) {
        this.plugin!.closeModal();
      }
    }
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
