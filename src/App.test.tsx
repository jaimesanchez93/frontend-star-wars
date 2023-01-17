import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("axios");

describe("test suite", () => {
  it("should be true", () => {
    const renderInstance = render(<App />);
    expect(renderInstance.asFragment().firstChild).toBeDefined();
  });
});
