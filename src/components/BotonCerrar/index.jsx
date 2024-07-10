/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Boton = styled.button`
    position: absolute; 
    background-color: transparent;
    border: none;
    color: #E18433;
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 9999;
`;

const BotonCerrar = ({ onClick }) => {
    return (
        <Boton><IoMdCloseCircleOutline onClick={onClick} style={{ cursor: "pointer" }} /></Boton>
    );
    };

export default BotonCerrar;