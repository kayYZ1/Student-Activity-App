import { Navigation, Name } from "../../styles/navigation/navbar.style"
import Burger from './Burger'

const Navbar = () => {
    return (
        <Navigation>
            <Name href="/">
                stumeet
            </Name>
            <Burger />
        </Navigation>
    )
}

export default Navbar