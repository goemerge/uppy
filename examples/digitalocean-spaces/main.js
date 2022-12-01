import Uppy from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import AwsS3 from "@growthcloud/aws-s3";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

const uppy = new Uppy({
  debug: true,
});

uppy.use(Dashboard, {
  inline: true,
  target: "body",
});

// No client side changes needed!
uppy.use(AwsS3, { companionUrl: "/companion" });
