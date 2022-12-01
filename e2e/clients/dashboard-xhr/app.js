import { Uppy } from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import XHRUpload from "@growthcloud/xhr-upload";
import Unsplash from "@growthcloud/unsplash";
import Url from "@growthcloud/url";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

const companionUrl = "http://localhost:3020";
const uppy = new Uppy()
  .use(Dashboard, { target: "#app", inline: true })
  .use(XHRUpload, {
    endpoint: "https://xhr-server.herokuapp.com/upload",
    limit: 6,
  })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl });

// Keep this here to access uppy in tests
window.uppy = uppy;
