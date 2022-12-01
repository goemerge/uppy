import Uppy from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import XHRUpload from "@growthcloud/xhr-upload";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

const uppy = new Uppy({
  debug: true,
  meta: { something: "xyz" },
});

uppy.use(Dashboard, {
  target: "#app",
  inline: true,
  hideRetryButton: true,
  hideCancelButton: true,
});

uppy.use(XHRUpload, {
  bundle: true,
  endpoint: "http://localhost:9967/upload",
  allowedMetaFields: ["something"],
  fieldName: "files",
});
