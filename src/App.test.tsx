import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    const renderInstance = render(<App />);
    expect(renderInstance.asFragment().firstChild).toBeDefined();
  });
});
