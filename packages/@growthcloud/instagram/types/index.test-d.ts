import Uppy from "@growthcloud/core";
import Instagram from "..";

{
  const uppy = new Uppy();
  uppy.use(Instagram, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
