import type { UIPlugin } from "@growthcloud/core";
import type { Provider } from "@growthcloud/companion-client";

interface ProviderViewOptions {
  provider: Provider;
  viewType?: "list" | "grid";
  showTitles?: boolean;
  showFilter?: boolean;
  showBreadcrumbs?: boolean;
}

interface OnFirstRenderer {
  onFirstRender: () => any;
}

declare class ProviderView {
  constructor(plugin: UIPlugin & OnFirstRenderer, opts: ProviderViewOptions);
  // @todo add other provider view methods
}

export default ProviderView;
