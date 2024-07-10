/* eslint-disable react/prop-types */
import { RiRestartFill } from "react-icons/ri";
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    background-color: #000000;
    border-radius: 0 50% 50% 0;
    top: 120px;
    left: -20px;
    z-index: 9997;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: #E18433;
    font-weight: bold;
    font-family: "Bebas Neue", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

    &:hover {
        color: #FFC300;
        left: 0;
    }

    @media (max-width: 800px) {
        top: 50px;
        left: 0;
    }
`;

const BotonReinicio = ({Reiniciar}) => {
    return (
        <Div onClick={Reiniciar}>
            <RiRestartFill />
        </Div>
    );
    }

export default BotonReinicio;