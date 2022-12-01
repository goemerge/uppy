import Uppy from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import RemoteSources from "@growthcloud/remote-sources";
import Webcam from "@growthcloud/webcam";
import ScreenCapture from "@growthcloud/screen-capture";
import GoldenRetriever from "@growthcloud/golden-retriever";
import ImageEditor from "@growthcloud/image-editor";
import DropTarget from "@growthcloud/drop-target";
import Audio from "@growthcloud/audio";
import Compressor from "@growthcloud/compressor";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

const COMPANION_URL = "http://companion.uppy.io";

const uppy = new Uppy()
  .use(Dashboard, { target: "#app", inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true });

// Keep this here to access uppy in tests
window.uppy = uppy;
