import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import App from "./App";

describe("App", () => {
  afterEach(cleanup);

  test("renders the package demo", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "A prop-driven prayer table." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Jumuah:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tour" })).toBeInTheDocument();
  });

  test("toggles optional rows", () => {
    render(<App />);

    fireEvent.click(screen.getByLabelText("Show Jumuah row"));

    expect(screen.queryByText("Jumuah:")).not.toBeInTheDocument();
  });
});
