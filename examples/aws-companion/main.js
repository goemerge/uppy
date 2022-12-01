import AwsS3 from "@growthcloud/aws-s3";
import Uppy from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import GoogleDrive from "@growthcloud/google-drive";
import Webcam from "@growthcloud/webcam";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";
import "@growthcloud/webcam/dist/style.css";

const uppy = new Uppy({
  debug: true,
  autoProceed: false,
});

uppy.use(GoogleDrive, {
  companionUrl: "http://localhost:3020",
});
uppy.use(Webcam);
uppy.use(Dashboard, {
  inline: true,
  target: "body",
  plugins: ["GoogleDrive", "Webcam"],
});
uppy.use(AwsS3, {
  companionUrl: "http://localhost:3020",
});
