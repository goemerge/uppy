import Uppy from "@growthcloud/core";
import Unsplash from "..";

{
  const uppy = new Uppy();
  uppy.use(Unsplash, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
