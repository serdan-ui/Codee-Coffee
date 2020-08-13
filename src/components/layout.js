import React from "react"
import Header from "./header"
import Helmet from "react-helmet"


const Layout = props => {
  return (
    <>
      <Helmet>
        <title>Code&Coffee</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
