/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { IoLogoYoutube } from "react-icons/io5";
import { useEffect, useState } from 'react';

const Div = styled.div`
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    top: 33vw;
    right: 10px;
    width: 200px;
    border-radius: 50px;
    height: 50px;
    z-index: 10;
    background-color: #c4302b;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.67);
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;
    color: white;

    @media (max-width: 800px) {
        top: 25vw;
        right: 50px;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;

        & .texto-reproducirEnYouTube {
            display: none;
        }
    }
`;

const ReproducirEnYouTube = ({ videoId = '-Ou5c3A225k'}) => {

    const abrirEnYoutube = () => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }

    return (
        <Div onClick={abrirEnYoutube} >
            <IoLogoYoutube /> <div className="texto-reproducirEnYouTube">Ver en YouTube</div>
        </Div>
    );
    };

export default ReproducirEnYouTube;