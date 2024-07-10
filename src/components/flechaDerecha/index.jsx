/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import styled from "styled-components";

const FlechaDerechaStyled = styled.button`
cursor: pointer;
position: absolute;
display: ${props => (props.$verflechaderecha === 'true' ? 'block' : 'none')};
height: 270px;
width: 50px;
bottom: 30px;
right: 0;
z-index: 3;
border: none;
background: rgb(28,28,28);
background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%);
color: #fff;
font-weight: bold;
font-size: 2rem;

&:hover {
    background: rgb(28,28,28);
    background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%);
}

@media (max-width: 768px) {
    display: none;
}
`;

const FlechaDerecha = ({ divRowRef }) => {
    const [verflechaderecha, setverflechaderecha] = useState(true);

    useEffect(() => {
      const contenedorVideos = divRowRef.current;
  
      const handleScroll = () => {
        const showArrow =
        (contenedorVideos.scrollWidth > contenedorVideos.clientWidth) &&
        (Math.ceil(contenedorVideos.scrollLeft) + 5 < 
         contenedorVideos.scrollWidth - contenedorVideos.clientWidth);
        setverflechaderecha(showArrow);
      };
  
      if (contenedorVideos) { 
        handleScroll();
        contenedorVideos.addEventListener("scroll", handleScroll);
        return () => contenedorVideos.removeEventListener("scroll", handleScroll);
      }
    }, [divRowRef]);
  
    const handleFlechaDerecha = () => {
      if (divRowRef && divRowRef.current) {
        const contenedorVideos = divRowRef.current;
        contenedorVideos.scrollLeft += contenedorVideos.offsetWidth;
      }
    };

    return (
        <FlechaDerechaStyled
            $verflechaderecha={verflechaderecha.toString()}
            role="button"
            onClick={handleFlechaDerecha}
        >
            <MdOutlineArrowForwardIos />
        </FlechaDerechaStyled>
    );
};

export default FlechaDerecha;
