import Uppy from "@growthcloud/core";
import Webcam from "@growthcloud/webcam";
import Dashboard from "@growthcloud/dashboard";
import XHRUpload from "@growthcloud/xhr-upload";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/webcam/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

const uppy = new Uppy({
  debug: true,
  autoProceed: false,
});

uppy.use(Webcam);
uppy.use(Dashboard, {
  inline: true,
  target: "body",
  plugins: ["Webcam"],
});
uppy.use(XHRUpload, {
  endpoint: "http://localhost:3020/upload",
});
