import Uppy from "@growthcloud/core";
import GoogleDrive from "@growthcloud/google-drive";
import Tus from "@growthcloud/tus";
import Dashboard from "@growthcloud/dashboard";
import MyCustomProvider from "./MyCustomProvider.jsx";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

const uppy = new Uppy({
  debug: true,
});

uppy.use(GoogleDrive, {
  companionUrl: "http://localhost:3020",
});

uppy.use(MyCustomProvider, {
  companionUrl: "http://localhost:3020",
});

uppy.use(Dashboard, {
  inline: true,
  target: "body",
  plugins: ["GoogleDrive", "MyCustomProvider"],
});

uppy.use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" });
