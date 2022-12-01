import Uppy from "@growthcloud/core";
import Facebook from "..";

{
  const uppy = new Uppy();
  uppy.use(Facebook, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
