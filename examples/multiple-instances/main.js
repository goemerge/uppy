import Uppy from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import GoldenRetriever from "@growthcloud/golden-retriever";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

// Initialise two Uppy instances with the GoldenRetriever plugin,
// but with different `id`s.
const a = new Uppy({
  id: "a",
  debug: true,
})
  .use(Dashboard, {
    target: "#a",
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false });

const b = new Uppy({
  id: "b",
  debug: true,
})
  .use(Dashboard, {
    target: "#b",
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false });

window.a = a;
window.b = b;
