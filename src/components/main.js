import React from "react"

import "../components/styles.css"

import { Container ,Col ,Button} from "react-bootstrap";
const Main = () => (
  <Container className=" h-auto  ">
      
      <Col className="d-flex flex-column align-items-center ">
      <h1 className="text-center font-weight-bold text-white shadow-h1">Bienvenido a Code and Coffee</h1>
      <h4 className="text-center w-75 text-white shadow-h4">Somos un equipo de Programadores que diseñamos paginas y app para tu emprendimiento</h4>
      <Button className="mt-4 rounded-pill bg-transparent btn btn-outline-light w-25 btn-start">Empezar</Button>
      </Col>

  </Container>
)

export default Main
