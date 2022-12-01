import { Uppy } from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import Tus from "@growthcloud/tus";
import Unsplash from "@growthcloud/unsplash";
import Url from "@growthcloud/url";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

function onShouldRetry(err, retryAttempt, options, next) {
  if (err?.originalResponse?.getStatus() === 418) {
    return true;
  }
  return next(err);
}

const companionUrl = "http://localhost:3020";
const uppy = new Uppy()
  .use(Dashboard, { target: "#app", inline: true })
  .use(Tus, { endpoint: "https://tusd.tusdemo.net/files", onShouldRetry })
  .use(Url, { target: Dashboard, companionUrl })
  .use(Unsplash, { target: Dashboard, companionUrl });

// Keep this here to access uppy in tests
window.uppy = uppy;
