import { Navbar } from '../components'
import { Container } from '../components/container/styles'

const Layout = ({ children, location }) => {
    return (
        <Container>
            <Navbar pathName={location.pathname} />
            {children}
        </Container>
    );
}

export default Layout;
