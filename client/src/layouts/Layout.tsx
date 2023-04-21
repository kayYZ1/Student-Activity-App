import Navbar from '../components/navigation/Navbar'

import { Container, Wrapper } from '../styles/layout.style'

import { ChildrenPropsType } from '../ts/types/childrenProps.types'

const Layout = (props: ChildrenPropsType) => {
  return (
    <Container>
      <Navbar />
        <Wrapper>
            {props.children}
        </Wrapper>
    </Container>
  )
}

export default Layout