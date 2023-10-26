import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navegacion() {
    return (
        <>
            <Navbar bg="danger" data-bs-theme="dark">
                <Container className="justify-content-start ml-5">
                    <Link to="/" className="text-white text-decoration-none">
                        🏡 Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        📒 Contacto
                    </Link>
                    <Link to="*" />
                </Container>
                <div>
                    <Navbar.Brand>Happy cake 🍰</Navbar.Brand>
                </div>
            </Navbar>
        </>
    );
}

export default Navegacion;
