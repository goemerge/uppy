import { Uppy } from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import Transloadit from "@growthcloud/transloadit";

import generateSignatureIfSecret from "./generateSignatureIfSecret.js";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";

// Environment variables:
// https://en.parceljs.org/env.html
const uppy = new Uppy()
  .use(Dashboard, { target: "#app", inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () =>
      generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
        auth: { key: process.env.VITE_TRANSLOADIT_KEY },
        template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
      }),
  });

// Keep this here to access uppy in tests
window.uppy = uppy;
