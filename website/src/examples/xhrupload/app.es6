import Uppy from "@growthcloud/core";
import FileInput from "@growthcloud/file-input";
import XHRUpload from "@growthcloud/xhr-upload";
import ProgressBar from "@growthcloud/progress-bar";

document.querySelector(".Uppy").innerHTML = "";

const uppy = new Uppy({ debug: true, autoProceed: true });
uppy.use(FileInput, {
  target: ".Uppy",
});
uppy.use(ProgressBar, {
  target: ".UppyProgressBar",
  hideAfterFinish: false,
});
uppy.use(XHRUpload, {
  endpoint: "https://xhr-server.herokuapp.com/upload",
  formData: true,
  fieldName: "files[]",
});

// And display uploaded files
uppy.on("upload-success", (file, response) => {
  const url = response.uploadURL;
  const fileName = file.name;

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.appendChild(document.createTextNode(fileName));
  li.appendChild(a);

  document.querySelector(".uploaded-files ol").appendChild(li);
});
