import { render, screen } from "../index"

import Navbar from "../../components/navigation/Navbar"

describe("Navbar", () => {
    it ("renders page title", () => {
        render(<Navbar />);
        expect(screen.getByText(/stumeet/)).to.exist;
    })
})