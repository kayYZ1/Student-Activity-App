import { useState } from 'react'

import Sidebar from './Sidebar'
import { StyledBurger } from '../../styles/navigation/burger.style'

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div></div>
            </StyledBurger>
            <Sidebar open={open} setOpen={setOpen}/>
        </>
    )
}

export default Burger