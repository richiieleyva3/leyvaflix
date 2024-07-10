/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import BotonCerrar from '../../components/BotonCerrar';
import { useEffect, useState } from 'react';

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
width: 95vw;
height: 95vh;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.67);
//max-width: 600px;
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

const ReproductorModal = ({ isOpen, onClose, titulo, url = '' }) => {
  const [urlID, setUrlID] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
      try {
          const parsedUrl = new URL(url);
          const newUrlID = parsedUrl.searchParams.get('v');
          if (newUrlID) {
              setUrlID(newUrlID);
              setVideoUrl("https://www.youtube.com/embed/" + newUrlID);
          }
      } catch (error) {
          console.error('Invalid URL:', error);
      }
  }, [url]);

if (!isOpen) return null;

  return (
    <>
      <ModalContent>
        <H1>{titulo}</H1>
        <Div>
        <iframe width="100%" height="100%"
        src={videoUrl}
        title={titulo} frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Div>
        <BotonCerrar onClick={onClose} />
      </ModalContent>
      <ModalContainer onClick={onClose}/>
      </>
  );
};

export default ReproductorModal;
