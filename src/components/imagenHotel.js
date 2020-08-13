import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const ImageBackground = styled(BackgroundImage)`
height : 700px ;

`

const ImagenHotel = () => {
const { image } = useStaticQuery(graphql`
query {
    image: file(relativePath: {eq : "puente.jpg"}){
        sharp : childImageSharp {
            fluid {
                srcSetWebp
            }
        }
    }
}

`) ;

const TextoImagen = styled.div`
    background-image: linear-gradient( to top , rgba(34,49,63,.55), rgba(34,49,63,.55));
    color: #FFF;
    height:100%;
    display: flex;
    flex-direction:column;
    flex:1;
    align-items: center;
    justify-content: center;

    h1{
        font-size:4rem;
        margin:0%;

        @media (min-width: 992px) {
            font-size: 5.8rem; 
        }
    }

    p{
        font-size:2rem;

        
        @media (min-width: 992px) {
            font-size: 2.6rem; 
        }
    }
`

    return ( 
    
   <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
       <TextoImagen>
           <h1>
               Bienvenido a mi pagina
           </h1>
           <p>La mejor pagina </p>
       </TextoImagen>

   </ImageBackground>
    
    );
}
 
export default ImagenHotel;