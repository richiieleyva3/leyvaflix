/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { MdFullscreen } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import styled from "styled-components";

const Nav = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    background-color: #000000a6;
    `;

const Contenedor = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    `;

const Boton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    color: #fff;
    &:focus {
        outline: none;
    }
    `;

const Barra = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Tiempo = styled.span`
    color: #fff;
    margin: 2px;
    `;

const ContenedorRango = styled.div`
    position: relative;
    width: 16rem;
    height: 0.5rem;
    border-radius: 500px;
    margin: 0 0.5rem;
    background-color: #3b3b3b;
    `;

const Rango = styled.input`
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    `;

const Progreso = styled.div.attrs(props => ({
    style: {
        width: `${(props.$progreso / props.$duration) * 100}%`,
    },
}))`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 500px;
    background-color: #1860fc;
`;

const ContenedorVolumen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Volumen = styled.input`
    top: 0;
    left: 0;
    width: 5rem;
    height: 1.5rem;
    border-radius: 500px;
    background-color: #3b3b3b;
    margin: 0;
    `;

const Velocidad = styled.select`
    background-color: transparent;
    color: #fff;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    &:focus {
        outline: none;
    }
    `;

const OpcionesVelocidad = styled.option`
    background-color: #000000a6;
    border-radius: none;
    color: #fff;
    &:focus {
        outline: none;
    }
    `;

const Play = styled(BsPlayFill)`
font-size: 1.5em;
`;

const FullScreen = styled(MdFullscreen)`
font-size: 1.5em;
`;

const Pause = styled(BsPauseFill)`
font-size: 1.5em;
`;

const Sonido = styled(AiFillSound)`
font-size: 1.5em;
`;

const VideoControles = ({ showControls, progress, duration, isplaying, volume, playbackRate, isFullScreen, togglePlay, handleVolumeChange, handlePlaybackRateChange, toggleFullScreen, handleProgressChange}) => {

const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

  return (
    <Nav id="controles">
        <Contenedor>
            <Boton onClick={togglePlay} >{!isplaying ? <Play/> : <Pause/>}</Boton>
            <Barra>
                <Tiempo>{formatTime(progress)}</Tiempo>
                <ContenedorRango>
                    <Rango type="range" min={0} max={duration} step={1} value={progress} onChange={handleProgressChange} />
                    <Progreso $progreso={progress} $duration={duration} ></Progreso>
                </ContenedorRango>
                <Tiempo>{formatTime(duration)}</Tiempo>
            </Barra>
            <Boton><Sonido/></Boton>
            <ContenedorVolumen>
                <Volumen type="range" min={0} max={1} step={0.1} value={volume} onChange={handleVolumeChange} />
            </ContenedorVolumen>
            {!isplaying &&
            <Velocidad value={playbackRate} onChange={handlePlaybackRateChange}>
                <OpcionesVelocidad value="0.5">0.5x</OpcionesVelocidad>
                <OpcionesVelocidad value="1">1x</OpcionesVelocidad>
                <OpcionesVelocidad value="1.5">1.5x</OpcionesVelocidad>
                <OpcionesVelocidad value="2">2x</OpcionesVelocidad>
            </Velocidad>
            }
            <Boton onClick={toggleFullScreen} ><FullScreen/></Boton>
        </Contenedor>
    </Nav>
  );
};

export default VideoControles;
