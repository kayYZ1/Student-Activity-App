import { SideBarProps } from '../../ts/types/navbar.types'

import { NavigationMenu, List, Row, NavLink } from '../../styles/navigation/sidebar.style'

const Sidebar = ({open, setOpen}: SideBarProps) => {
    return (
        <NavigationMenu open={open} setOpen={setOpen}>
            <List>
                <Row>
                    <NavLink to="/" onClick={() => setOpen(false)}>View current events</NavLink>
                </Row>
                <Row>
                    <NavLink to="/newEvent" onClick={() => setOpen(false)}>Add new event</NavLink>
                </Row>
                <Row>
                    <NavLink to="/markedEvents" onClick={() => setOpen(false)}>Marked Events</NavLink>
                </Row>
            </List>
        </NavigationMenu>
    )
}

export default Sidebar