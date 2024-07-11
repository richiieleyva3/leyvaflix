/* eslint-disable react/prop-types */
import styled from 'styled-components';
import CampoBoton from '../CampoBoton';
import 'react-toastify/dist/ReactToastify.css';

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.888);
display: flex;
justify-content: center;
align-items: center;
z-index: 9998;
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.888);
border-radius: 5px;
padding: 20px;
position: fixed; 
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100vw;
height: fit-content;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.67);
max-width: 600px;
z-index: 9999;
gap: 20px;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const H1 = styled.h1`
    font-size: 2rem;
    color: #E18433;
    font-weight: bold;
    font-family: "Bebas Neue", sans-serif;
    text-transform: uppercase;
`;

const P = styled.p`
    font-size: 1.2rem;
    color: #fff;
    font-family: "Bebas Neue", sans-serif;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 30px;
`;

const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    width: 100%;
`;

const ModalConfirmacionBorrar = ({ isOpen, videoId, onClose, onAceptar, onDenegar }) => {

const handleAceptar = () => {
    onAceptar(videoId);
    onClose();
};

const handleDenegar = () => {
    onDenegar();
};

if (!isOpen) return null;

  return (
    <>
      <ModalContent>
        <H1>¡Estas a punto de eliminar este video!</H1>
        <Div>
          <P>¿Estás de acuerdo?</P>
          <ContenedorBotones>
            <CampoBoton color="#E18433" label="Sí, eliminar" onClick={handleAceptar} />
            <CampoBoton color="#fff" type="reset" label="No, no eliminar" onClick={handleDenegar} />
          </ContenedorBotones>
        </Div>
      </ModalContent>
      <ModalContainer/>
      </>
  );
};

export default ModalConfirmacionBorrar;
