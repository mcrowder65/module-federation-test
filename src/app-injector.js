import App from "./module-federation-test";
import React from "react";
import { createRoot } from "react-dom/client";

export const inject = parentElementId => {
  const node = document.getElementById(parentElementId)
  const root = createRoot(node)
  root.render(<App/>)
  return () => root.unmount()
}

