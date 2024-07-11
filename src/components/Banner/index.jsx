/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import TituloCategoria from '../TituloCategoria';
import fondo from '../../assets/webp/fondo-frontend.webp';
import VideoPlayer from '../VideoPlayer';
import Mp4Principal from '../../assets/videos/Como-volverse-un-desarrollador-Front-End.mp4';
//import VideoYouTube from 'https://www.youtube.com/watch?v=-Ou5c3A225k';

const Contenedor = styled.div`
    //background-image: url(${fondo});
    position: relative;
    opacity: 0.9;
    background-size: cover;
    background-position: center;
    color: #fff;
    width: 100%;
    //height: 770px;
    height: 400px;

    @media (max-width: 800px) {
        height: fit-content;
    }
    `;

const FondoColor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    //background: rgb(7,53,64);
    //background: linear-gradient(0deg, #073540c9 0%, rgba(7, 53, 64, 0.452) 100%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    padding: 40px;
    z-index: 0;

    @media (max-width: 800px) {
        flex-direction: column;
        padding: 0;
        gap: 10px;
        padding: 60px 5px 5px 5px;
    }
    `;

const Texto = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Bebas Neue", sans-serif;
    text-align: justify;
    height: auto;
    width: 50%;
    gap: 20px;
    top: 25vw;
    left: 50px;

    h1 {
        font-size: 1.8rem;
        font-weight: bold;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    p {
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 1200px) {
        gap: 10px;
        top: 550px;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 50px !important;
        align-items: center !important;
        justify-content: center !important;
        display: flex !important;
        margin: auto !important;

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        width: 100%;
        padding: 10px;
    }

    @media (max-width: 800px) {
        gap: 10px;
        top: 350px;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 30px !important;
        align-items: center !important;
        justify-content: center !important;
        display: flex !important;
        margin: auto !important;

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        width: 100%;
        padding: 10px;
    }
    `;

const Recomendacion = styled.div`
        display: flex;
        justify-content: right;
        margin-right: 80px;
        align-items: center;
        height: auto;
        width: 50%;

        @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
        padding: 10px;
    }
    `;

const MaskVideo = styled.div`
    overflow: hidden;
    position: absolute;
    height: calc(100vw * 0.5625);
    top: 0;
    left: 0;
    width: 100%;
    `;

const Mask = styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    `;
    
const Fade = styled.div`
    position: absolute;
    display: flex; //////////////////////////
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 1) 85%);
    `;

const Titulo = styled(TituloCategoria)`

    `;

const Banner = () => {

  return (
    <>
    <MaskVideo>
        <Mask>
            <VideoPlayer
                height={"100%"} 
                width={"100%"} 
                url={Mp4Principal}
            />
            <Fade/>
        </Mask>
    </MaskVideo>
    <Contenedor>
        <FondoColor/>
            <Texto>
                <Titulo color="#6BD1FF">Front End</Titulo>
                <h1>Challenge React</h1>
                <p>Este challenge fue una forma de aprendizaje. Es un mecanismo donde me comprometi en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React de Oracle ONE.</p>
            </Texto>
            <Recomendacion>
            </Recomendacion>
    </Contenedor>
    </>
  );
}

export default Banner;

/*             <Video fondo={fondo} color="#6BD1FF" imagen={true} />
<Video ref={videoRef} height={"400px"} width={"100%"}  url="https://www.youtube.com/embed/-Ou5c3A225k?rel=0&amp;autoplay=1;controls=0" />
*/

/*

*/