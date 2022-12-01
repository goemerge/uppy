import Uppy from "@growthcloud/core";
import Zoom from "..";

{
  const uppy = new Uppy();
  uppy.use(Zoom, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
