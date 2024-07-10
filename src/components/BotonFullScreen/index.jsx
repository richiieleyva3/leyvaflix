/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay } from "react-icons/fa";

const Boton = styled.button`
cursor: pointer;
position: absolute;
z-index: 1;
width: 200px;
height: 50px;
top: 40vw;
left: 50px;
font-family: "Bebas Neue", sans-serif;
border: none;
color: #000;
border-radius: 5px;
font-size: 1.5em;
background-color: #fff;
font-weight: bold;
box-shadow: 0 0 10px #000;

&:hover {
    opacity: 0.8;
}
`;

const BotonFullScreen = ({ toggleFullscreen }) => {

    const handleClick = () => {
        toggleFullscreen();
    }

    return (
        <Boton onClick={handleClick}>
           <FaPlay/> Reproducir
        </Boton>
    );
};

export default React.memo(BotonFullScreen);
