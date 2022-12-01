import Uppy from "@growthcloud/core";
import Box from "..";

{
  const uppy = new Uppy();
  uppy.use(Box, {
    companionUrl: "",
    companionCookiesRule: "same-origin",
    target: "body",
    title: "title",
  });
}
