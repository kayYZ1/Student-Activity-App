import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"

import NewEvent from "../../pages/NewEvent"

const mockedNavigate = vi.fn()

vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: () => mockedNavigate
}));

describe("NewEvents form", () => {
    it ("renders title field", () => {
        render(<NewEvent/>)
        expect(screen.getByPlaceholderText(/Title/)).to.exist;
    })
    it ("renders description field", () => {
        render(<NewEvent/>)
        expect(screen.getByPlaceholderText(/Description/)).to.exist;
    })
    it ("renders address field", () => {
        render(<NewEvent/>)
        expect(screen.getByPlaceholderText(/Address/)).to.exist;
    })
    it ("renders image url field", () => {
        render(<NewEvent/>)
        expect(screen.getByPlaceholderText(/Image Url/)).to.exist;
    })
    it ("renders hour field", () => {
        render(<NewEvent />)
        expect(screen.getByTestId(/meetingHour/)).to.exist;
    })
    it("renders date field", () => {
        render(<NewEvent />)
        expect(screen.getByTestId(/meetingDate/)).to.exist;
    })

    /*it("redirects to '/' after adding new entry", async () => {
        render(<NewEvent />)
        const titleField = screen.getByPlaceholderText(/Title/);
        const descriptionField = screen.getByPlaceholderText(/Description/);
        const addressField = screen.getByPlaceholderText(/Address/);
        const imageUrlField = screen.getByPlaceholderText(/Image Url/);
        const dateField = screen.getByTestId(/meetingDate/);
        const submitButton = screen.getByRole("button");

        await userEvent.type(titleField, "Title example #1");
        await userEvent.type(descriptionField, "Description example #2");
        await userEvent.type(addressField, "Address example #3");
        await userEvent.type(imageUrlField, "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_960_720.jpg");
        await userEvent.type(dateField, "2023/05/15");
        await userEvent.click(submitButton);

        expect(mockedNavigate).toHaveBeenCalled();
    })*/
})