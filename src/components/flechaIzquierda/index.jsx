/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBullseye, FaGalacticSenate } from "react-icons/fa6";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import styled from "styled-components";

const FlechaIzquierdaEstilizada = styled.button`
cursor: pointer;
position: absolute;
display: ${props => props.$verflechaizquierda === 'true' ? 'block' : 'none'};
height: 270px;
width: 50px;
bottom: 30px;
left: 0;
z-index: 3;
border: none;
background: rgb(28,28,28);
background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 100%);
color: #fff;
font-weight: bold;
font-size: 2rem;

&:hover {
    background: rgb(28,28,28);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 100%);
}

@media (max-width: 768px) {
    display: none;
}   
`;

const FlechaIzquierda = ({ divRowRef }) => {
    const [verflechaizquierda, setverflechaizquierda] = useState(false);

    useEffect(() => {
        const contenedorVideos = divRowRef.current;
    
        const handleScroll = () => {
            const showArrow = contenedorVideos.scrollLeft !== 0;
            setverflechaizquierda(showArrow);
        };
    
        contenedorVideos.addEventListener("scroll", handleScroll);
        return () => contenedorVideos.removeEventListener("scroll", handleScroll);
      }, [divRowRef]);
    
      const handleFlechaIzquierda = () => {
        if (divRowRef && divRowRef.current) {
          const contenedorVideos = divRowRef.current;
          contenedorVideos.scrollLeft -= contenedorVideos.offsetWidth;
        }
      };
    
    return (
        <FlechaIzquierdaEstilizada 
            $verflechaizquierda={verflechaizquierda.toString()}
            role="button"
            onClick={handleFlechaIzquierda}
        >
        <MdOutlineArrowBackIosNew /></FlechaIzquierdaEstilizada>
    );
    }

export default FlechaIzquierda;