/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { RiPlayLargeFill } from "react-icons/ri";
import { FaPause } from "react-icons/fa6";

const Boton = styled.button`
cursor: pointer;
position: absolute;
display: ${props => props.isFullscreen ? 'flex' : 'flex'};
z-index: 5;
width: 50px;
height: 50px;
font-size: 2em;
top: ${props => props.isFullscreen ? 'none' : '600px'};
bottom: ${props => props.isFullscreen ? '0' : 'none'};
margin: ${props => props.isFullscreen ? '3px 30px' : '0'};
left: 5px;
text-transform: uppercase;
font-family: "Bebas Neue", sans-serif;
border: none;
color: #fff;
background-color: transparent;
font-weight: bold;
`;

const BotonPlay = ({ funcion, isFullscreen }) => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handleClick = () => {
        setIsPlaying(prev => !prev);
        funcion();
    }

    return (
        <Boton onClick={handleClick} isFullscreen={isFullscreen}>
            {isPlaying ? <RiPlayLargeFill /> : <FaPause />}
        </Boton>
    );
};

export default React.memo(BotonPlay);
