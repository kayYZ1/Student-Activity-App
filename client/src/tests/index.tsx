import { render, RenderOptions } from "@testing-library/react"
import { ReactElement, ReactNode } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import { MarkedEventsContextProvider } from "../context/markedEventsContext"

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <MarkedEventsContextProvider>
            <Router>
                {children}
            </Router>
        </MarkedEventsContextProvider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Wrapper, ...options })

export *  from "@testing-library/react"
export { customRender as render }