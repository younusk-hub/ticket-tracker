import {render, screen} from "@testing-library/react";
import AddCard from "./AddCard";
import Cards from "../Cards/Cards";
import userEvent from "@testing-library/user-event"
import team from './../../data/team';
import App from "../../App";

describe("Testing form when adding a new card", () => {
    it("should display form when the plus is clicked", () => {
        render(<AddCard/>)

        const addButton = screen.getByRole("button", {className: 'add-container__add-button'} )
        userEvent.click(addButton)

        const form = screen.getByTestId("test1")

        expect(form).toBeInTheDocument()
    })

    it("should display a new card when form submitted", () => {
        
        render(<App/>)
     

        const addButton = screen.getByRole('button', {
            name: /\+/i
          })
        userEvent.click(addButton)

        const nameInput = screen.getByRole('textbox', {
            name: /name:/i
          })
        userEvent.type(nameInput, "younus")
        
        const roleInput = screen.getByRole('textbox', {
            name: /role:/i
          })
        userEvent.type(roleInput, "Software Engineer")

        const submitButton = screen.getByRole('button', {
            name: /submit/i
          })
        userEvent.click(submitButton)

        // const cards = screen.getAllByTestId("display-card")
        
        expect(team).toHaveLength(11)

    })

})