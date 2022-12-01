import Uppy from "@growthcloud/core";
import FileInput from "@growthcloud/file-input";
import StatusBar from "@growthcloud/status-bar";
import Tus from "@growthcloud/tus";

const uppyOne = new Uppy({ debug: true, autoProceed: true });
uppyOne
  .use(FileInput, { target: ".UppyInput", pretty: false })
  .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" })
  .use(StatusBar, {
    target: ".UppyInput-Progress",
    hideUploadButton: true,
    hideAfterFinish: false,
  });
