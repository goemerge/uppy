import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as Dashboard from '@growthcloud/dashboard';
import { Uppy } from '@growthcloud/core';

@Component({
  selector: 'uppy-dashboard-demo',
  template: `<uppy-dashboard-modal
    [uppy]="uppy"
    [props]="props"
  ></uppy-dashboard-modal>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardModalDemoComponent {
  uppy: Uppy = new Uppy({ debug: true, autoProceed: true });
  props: Dashboard.DashboardOptions;
}
