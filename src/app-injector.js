import App from "./module-federation-test";
import React from "react";
import { createRoot } from "react-dom/client";

export const inject = (parentElementId, callback) => {
  const node = document.getElementById(parentElementId)
  const root = createRoot(node)
  root.render(<App callback={callback}/>)
  return () => root.unmount()
}

