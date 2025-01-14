import { describe, expect, it } from "@jest/globals";
import Uppy from "@growthcloud/core";
import Webcam from "../lib/index.js";

describe("Webcam", () => {
  describe("_getMediaRecorderOptions", () => {
    it("should not have a mimeType set if no preferences given", () => {
      globalThis.MediaRecorder = {
        isTypeSupported: () => true,
      };

      const uppy = new Uppy().use(Webcam);
      expect(
        uppy.getPlugin("Webcam").getMediaRecorderOptions().mimeType
      ).not.toBeDefined();
    });

    it("should use preferredVideoMimeType", () => {
      globalThis.MediaRecorder = {
        isTypeSupported: (ty) => ty === "video/webm",
      };

      const uppy = new Uppy().use(Webcam, {
        preferredVideoMimeType: "video/webm",
      });
      expect(
        uppy.getPlugin("Webcam").getMediaRecorderOptions().mimeType
      ).toEqual("video/webm");
    });

    it("should not use preferredVideoMimeType if it is not supported", () => {
      globalThis.MediaRecorder = {
        isTypeSupported: (ty) => ty === "video/webm",
      };

      const uppy = new Uppy().use(Webcam, {
        preferredVideoMimeType: "video/mp4",
      });
      expect(
        uppy.getPlugin("Webcam").getMediaRecorderOptions().mimeType
      ).not.toBeDefined();
    });

    it("should pick type based on `allowedFileTypes`", () => {
      globalThis.MediaRecorder = {
        isTypeSupported: () => true,
      };

      const uppy = new Uppy({
        restrictions: { allowedFileTypes: ["video/mp4", "video/webm"] },
      }).use(Webcam);
      expect(
        uppy.getPlugin("Webcam").getMediaRecorderOptions().mimeType
      ).toEqual("video/mp4");
    });

    it("should use first supported type from allowedFileTypes", () => {
      globalThis.MediaRecorder = {
        isTypeSupported: (ty) => ty === "video/webm",
      };

      const uppy = new Uppy({
        restrictions: { allowedFileTypes: ["video/mp4", "video/webm"] },
      }).use(Webcam);
      expect(
        uppy.getPlugin("Webcam").getMediaRecorderOptions().mimeType
      ).toEqual("video/webm");
    });

    it("should prefer preferredVideoMimeType over allowedFileTypes", () => {
      globalThis.MediaRecorder = {
        isTypeSupported: () => true,
      };

      const uppy = new Uppy({
        restrictions: { allowedFileTypes: ["video/mp4", "video/webm"] },
      }).use(Webcam, { preferredVideoMimeType: "video/webm" });
      expect(
        uppy.getPlugin("Webcam").getMediaRecorderOptions().mimeType
      ).toEqual("video/webm");
    });

    it("should not use allowedFileTypes if they are unsupported", () => {
      globalThis.MediaRecorder = {
        isTypeSupported: () => false,
      };

      const uppy = new Uppy({
        restrictions: { allowedFileTypes: ["video/mp4", "video/webm"] },
      }).use(Webcam);
      expect(
        uppy.getPlugin("Webcam").getMediaRecorderOptions().mimeType
      ).toEqual(undefined);
    });
  });
});
