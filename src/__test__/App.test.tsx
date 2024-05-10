import { it, describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    it("Renders App correctly", () => {
        render(<App />);
        const react = screen.getAllByText(/react/i);
        expect(react).toHaveLength(2);
    });
    it("Should render *Click on the Vite and React logos to learn more*", () => {
        render(<App />);
        const learnMore = screen.getByText(/Click on the Vite and React logos to learn more/i);
        expect(learnMore).toBeInTheDocument();
    });
});
