import { Uppy } from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import AwsS3 from "@growthcloud/aws-s3";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

const uppy = new Uppy()
  .use(Dashboard, { target: "#app", inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  });

// Keep this here to access uppy in tests
window.uppy = uppy;
