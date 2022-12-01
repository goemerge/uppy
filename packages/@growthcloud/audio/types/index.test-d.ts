import Uppy from "@growthcloud/core";
import Audio from "..";

{
  const uppy = new Uppy();

  uppy.use(Audio, {
    target: "body",
  });
}
