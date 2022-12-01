import { expectType } from "tsd";
import Uppy from "@growthcloud/core";
import type { UppyFile } from "@growthcloud/core";
import AwsS3 from "..";

{
  const uppy = new Uppy();
  uppy.use(AwsS3, {
    getUploadParameters(file) {
      expectType<UppyFile>(file);
      return { url: "" };
    },
  });
}
