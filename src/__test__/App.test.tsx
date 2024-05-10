import { it, describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    it("Renders App correctly", () => {
        render(<App />);
        const react = screen.getAllByText(/react/i);
        expect(react).toHaveLength(2);
    });
});
