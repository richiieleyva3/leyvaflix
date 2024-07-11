/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import TituloCategoria from '../TituloCategoria';
import React, { useEffect, useRef, useState } from "react";
import { IoTrash } from "react-icons/io5";
import { MdEdit, MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import FlechaIzquierda from '../flechaIzquierda';
import FlechaDerecha from '../flechaDerecha';
import ModalConfirmacionBorrar from '../ModalConfirmacionBorrar';

const DivColumn = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: left;
overflow: hidden;
height: fit-content;
width: calc(100% - 30px);
gap: 20px;
transition: all .5s ease;

@media (max-width: 800px) {
        width: 100%;
    }
`;

const DivRow = styled.div`
position: relative;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: left;
margin-bottom: 50px;
margin-left: 0;
padding: 0;
//gap: 7px;
align-items: center;
height: 250px;
overflow: hidden;
scroll-behavior: smooth;
transition: all .5s ease;
width: 100%;

@media (max-width: 800px) {
        display: grid;
        height: fit-content;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        overflow: visible;
    }

@media (max-width: 699px) {
    display: grid;
    height: fit-content;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    overflow: visible;
}
`;

const ContenedorVideoIndivual = styled.a`
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 200px;
min-width: calc((100%) / 5);
border-radius: 5px;
padding: 0 3.5px;
z-index: 2;
box-shadow: ${props => `outset 0 20px 20px ${props.color}`};
transition: all .5s ease;

&:hover {
    transform: scale(1.1) translateZ(0) translateX(0);
    //transform: ${ props => `scale(1.1) translateZ(0) translateX(${props.index})`};
    z-index: 4;
    overflow: visible;
}

&:hover .navVideo {
    display: flex;
}

@media (max-width: 800px) {
    &:hover {
        transform: scale(1) translateZ(0) translateX(0) translateZ(0) !important;
        z-index: 4;
        overflow: visible;
    }
    .navVideo {
        display: flex;
    }
}
`;

const Video = styled.div`
cursor: pointer;
background-image: url(${props => props.$fondo});
background-size: 100% 100%;
background-position: center;
border-radius: 5px;
height: 100%;
width: 100%;
box-shadow: ${props => `inset 0 0 7px ${props.$color}`};
`;

const Nav = styled.div`
position: absolute;
display: none;
justify-content: space-evenly;
align-items: center;
border-radius: 0 0 5px 5px;
height: 20%;
width: calc(100% - 7px);
bottom: 0;
background-color: #1c1c1ca8;
//background: rgb(28,28,28);
//background: linear-gradient(0deg, rgba(28,28,28,1) 0%, rgba(28,28,28,0) 100%);
box-shadow: ${props => `inset 0 0 7px ${props.$color}`};
`;

const BotonEliminar = styled.button`
cursor: pointer;
text-align: center;
text-transform: uppercase;
color: #fff;
font-weight: bold;
width: 50%;
height: 100%;
background-color: transparent;
border: none;
z-index: 5;
`;

const BotonEditar = styled.button`
cursor: pointer;
text-align: center;
text-transform: uppercase;
color: #fff;
font-weight: bold;
width: 50%;
height: 100%;
background-color: transparent;
border: none;
z-index: 5;
`;

const CategoriaVideos = ({ categoria, videosPorCategoria, funcion, onEliminar, reproducir }) => {
    const divRowRef = useRef(null);
    const [isModalConfirmacionOpen, setIsModalConfirmacionOpen] = useState(false);
    const [idVideo, setIdVideo] = useState(null);

    useEffect(() => {
        const divRow = divRowRef.current;
    
        const handleMouseOver = (event) => {
          const video = event.target.closest('.video');
          if (video) {
            const videoRect = video.getBoundingClientRect();
            const divRowRect = divRow.getBoundingClientRect();

            const isVisible = (
                divRowRect.left >= divRowRect.left &&
                divRowRect.right <= divRowRect.right
            );
    
            if (isVisible) {
              const isLeftEdge = videoRect.left <= divRowRect.left + 20;
              const isRightEdge = videoRect.right >= divRowRect.right - 20;
    
              if (isLeftEdge || isRightEdge) {
                video.style.zIndex = 4;
                video.style.transform = isLeftEdge ? "scale(1.1) translateZ(0) translateX(20px)" : "scale(1.1) translateZ(0) translateX(-40px)";
              } else {
                video.style.zIndex = 4;
                video.style.transform = "scale(1.1) translateZ(0) translateX(0)";
              }
            }
          }
        };
    
        const handleMouseOut = (event) => {
            const video = event.target.closest('.video');
            if (video) {
              video.style.zIndex = 2;
              video.style.transform = "scale(1) translateZ(0) translateX(0)"; 
            }
        };
    
        divRow.addEventListener('mouseover', handleMouseOver);
        divRow.addEventListener('mouseout', handleMouseOut);
        divRow.addEventListener('scroll', handleMouseOver);
    
        return () => {
            divRow.removeEventListener('mouseover', handleMouseOver);
            divRow.removeEventListener('mouseout', handleMouseOut);
        };
      }, []);

      const handleEliminar = (id) => {
            onEliminar(id.toString());
        };

        const handleOpenModal = (id) => {
            setIdVideo(id);
            setIsModalConfirmacionOpen(true);
        }
  
    return (
    <DivColumn key={categoria}>
        <TituloCategoria color={videosPorCategoria[categoria][0].color}>
            {categoria}
        </TituloCategoria>
        <FlechaIzquierda
            divRowRef={divRowRef}  
        ><MdOutlineArrowBackIosNew /></FlechaIzquierda>
        <DivRow ref={divRowRef} className={`contenedorVideos-${categoria.replace(/\s/g, '')}`} >
        {
            videosPorCategoria[categoria].map((video, index) => (
                <ContenedorVideoIndivual
                    target={"_blank"}
                    key={video.id}
                    $color={video.color}
                    className={`video`}
                >
                    <Video
                        $fondo={video.fondo}
                        $color={video.color}
                        $url={video.url}
                        onClick={() => reproducir(video.id)}
                    >
                    </Video>
                    <Nav className="navVideo" color={video.color}>
                    <BotonEliminar onClick={() => handleOpenModal(video.id)}>
                        <IoTrash /> Borrar
                    </BotonEliminar>
                    <BotonEditar onClick={() => funcion(video.id)}>
                        <MdEdit /> Editar
                    </BotonEditar>
                    </Nav>
                </ContenedorVideoIndivual>
            ))
        }
        </DivRow>
        <FlechaDerecha
            divRowRef={divRowRef}
        ></FlechaDerecha>
        <ModalConfirmacionBorrar
            isOpen={isModalConfirmacionOpen}
            videoId={idVideo}
            onClose={() => setIsModalConfirmacionOpen(false)}
            onAceptar={handleEliminar}
            onDenegar={() => setIsModalConfirmacionOpen(false)}
        />
    </DivColumn>
    );
  };

  export default React.memo(CategoriaVideos);