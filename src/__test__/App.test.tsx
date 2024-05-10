import { it, describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    it("Should update button count on click", async () => {
        render(<App />);
        const user = userEvent.setup();
        const countButton = screen.getByRole("button");
        await user.click(countButton);
        expect(countButton).toHaveTextContent(/count is 1/i);
    });
});
