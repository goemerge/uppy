import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as Dashboard from '@growthcloud/dashboard';
import { Uppy } from '@growthcloud/core';

@Component({
  selector: 'uppy-dashboard-demo',
  template: `<uppy-dashboard [uppy]="uppy" [props]="props"></uppy-dashboard>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDemoComponent {
  uppy: Uppy = new Uppy({ debug: true, autoProceed: true });
  props: Dashboard.DashboardOptions;
}
