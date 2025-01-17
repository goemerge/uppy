/* eslint-disable react/react-in-jsx-scope */
import Uppy from "@growthcloud/core";
/* eslint-disable-next-line no-unused-vars */
import React, { useState } from "react";
import { Dashboard, DashboardModal, DragDrop } from "@growthcloud/react";
import ThumbnailGenerator from "@growthcloud/thumbnail-generator";

import "@growthcloud/core/dist/style.css";
import "@growthcloud/dashboard/dist/style.css";
import "@growthcloud/drag-drop/dist/style.css";

export default function App() {
  const uppyDashboard = new Uppy({ id: "dashboard" });
  const uppyModal = new Uppy({ id: "modal" });
  const uppyDragDrop = new Uppy({ id: "drag-drop" }).use(ThumbnailGenerator);
  const [open, setOpen] = useState(false);

  // drag-drop has no visual output so we test it via the uppy instance
  window.uppy = uppyDragDrop;

  return (
    <div
      style={{
        maxWidth: "30em",
        margin: "5em 0",
        display: "grid",
        gridGap: "2em",
      }}
    >
      <button type="button" id="open" onClick={() => setOpen(!open)}>
        Open Modal
      </button>

      <Dashboard id="dashboard" uppy={uppyDashboard} />
      <DashboardModal id="modal" open={open} uppy={uppyModal} />
      <DragDrop id="drag-drop" uppy={uppyDragDrop} />
    </div>
  );
}
