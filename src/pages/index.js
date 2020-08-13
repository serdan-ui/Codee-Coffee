import React from "react"
import Layout from "../components/layout";
import "../components/styles.css"
import Nav from "../components/nav"
import Main from "../components/main";
import Servicios from "../components/servicio";
import Nosotros from "../components/nosotros";
import Proyectos from "../components/proyectos";
import Contacto from "../components/contacto";

const IndexPage = () => (
  <Layout>
    <Nav />
    <Main/>
    <Servicios/>
    <Nosotros/>
    <Proyectos/>
    <Contacto />
  </Layout>
)

export default IndexPage
