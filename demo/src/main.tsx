import { Schema } from "effect";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(
  Schema.decodeUnknownSync(Schema.instanceOf(HTMLElement))(
    document.getElementById("root"),
  ),
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
