/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { PiSpeakerHighBold } from "react-icons/pi";
import { PiSpeakerSimpleXBold } from "react-icons/pi";
import React, { useEffect, useState, forwardRef  } from 'react';

const Boton = styled.button`
cursor: pointer;
position: absolute;
z-index: 5;
width: 50px;
height: 50px;
font-size: 1.2em;
top: 40vw;
margin: 0;
right: 50px;
text-transform: uppercase;
font-family: "Bebas Neue", sans-serif;
border: none;
color: #fff;
background-color: transparent;
font-weight: bold;

    @media (max-width: 800px) {
        z-index: 50;
    }
`;

const Circulo1 = styled.div`
width: 100%;
height: 100%;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
border: 2px solid #fff;
`;

const Circulo2 = styled.div`
width: 90%;
height: 90%;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
border: 1px solid #fff;

&:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid #fff;
}

`;

const BotonMute = ({ funcion, isMuted, setIsMuted }, ref) => {

    const handleClick = () => {
        funcion();
        setIsMuted(!isMuted);
    }

    return (
        <Boton onClick={handleClick} ref={ref}>
            <Circulo1 >
                <Circulo2 >
                    {isMuted ? <PiSpeakerSimpleXBold /> : <PiSpeakerHighBold />}
                </Circulo2>
            </Circulo1>
        </Boton>
    );
};

export default React.forwardRef(BotonMute);
