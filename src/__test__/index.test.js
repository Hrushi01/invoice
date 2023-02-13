import { createRoot } from "react-dom/client";
import App from "../App";

describe("index.js", () => {
  it("renders the app", () => {
    const rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);

    createRoot(rootElement).render(<App />);

    expect(document.getElementById("root")).toBeDefined();
  });
});
