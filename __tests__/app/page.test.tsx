import React from "react";
import { render, screen } from "@testing-library/react";
import Page from "../../src/app/page";
import { expect } from "@jest/globals";

describe("nasa-project/src/app/page.tsx", () => {
  test("Render", () => {
    render(<Page />);
    const header = screen.getByRole("heading");
    expect(String(header.innerHTML)).toEqual("Welcome to NASA Project");
  });
});