import Uppy from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import Compressor from "@growthcloud/compressor";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

const uppy = new Uppy()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: "image/webp",
  });

// Keep this here to access uppy in tests
window.uppy = uppy;
