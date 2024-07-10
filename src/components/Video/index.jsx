/* eslint-disable react/prop-types */
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const Div = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
font-family: "Bebas Neue", sans-serif;
font-weight: bold;
font-size: 1.5em;
text-transform: uppercase;
background-image: url(${props => props.fondo});
background-position: center;
background-size: cover;
//border-radius: 10px;
color: #fff;
width: 330px;
height: 220px;
box-shadow: inset 2px 2px 20px ${props => hexToRgba(props.color)}, 2px 2px 10px #000000aa;

&:hover {
    scale: 1.5;
    box-shadow: inset 2px 2px 20px ${props => hexToRgba(props.color)}, 0px 0px 30px ${props => hexToRgba(props.color)};
}

&:hover div {
    opacity: 1;
}
`;

const Footer = styled.div`
position: absolute;
opacity: 0;
display: flex;
justify-content: space-evenly;
align-items: center;
bottom: 0;
width: 100%;
height: 40px;
//border-radius: 0 0 10px 10px;
//background: linear-gradient(0deg, rgb(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.3) 150%);;
background: rgb(0, 0, 0);
box-shadow: inset 0px -5px 20px -5px ${props => hexToRgba(props.color)};
color: #fff;

`;

const Boton = styled.button`
cursor: pointer;
width: 100%;
height: 50px;
text-transform: uppercase;
font-family: "Bebas Neue", sans-serif;
border: none;
color: #fff;
background-color: transparent;
font-weight: bold;
`;

const Video = ({ fondo, color, imagen=false }) => {

    return (
        <Div color={color} fondo={fondo}> 
            {!imagen ? 
            <Footer color={color}>
                <Boton>Ver</Boton>
                <Boton>Editar</Boton>
                <Boton>Eliminar</Boton>
            </Footer> :
            <Footer color={color}>
                <Boton>Ver Recomendación</Boton>
            </Footer>
            }
        </Div>
    );
};

export default Video;
