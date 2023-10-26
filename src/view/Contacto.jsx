import { Form, Button } from "react-bootstrap/";

function Contacto() {
    return (
        <div>
            <Form className="text-center">
                <Form.Group
                    className="mb-3 m-5"
                    controlId="exampleForm.ControlInput1"
                >
                    <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                    className="mb-3 m-5"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="success" className="px-4">Enviar</Button>
            </Form>
        </div>
    );
}

export default Contacto;
