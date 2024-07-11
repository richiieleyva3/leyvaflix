/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect, useCallback } from "react";
import VideoControles from "../VideoControles";
import BotonMute from "../BotonMute";
import BotonFullScreen from "../BotonFullScreen";
import ReproducirEnYouTube from "../ReproducirEnYouTube";
import ModalBienvenida from "../ModalBienvenida";

const VideoPlayer = ({url, height, width}) => {

    const videoRef = useRef(null);
    const contenedorRef = useRef(null);
    const botonMuteRef = useRef(null);
    var [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isHover, setIsHover] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isModalBienvenidaOpen, setIsModaBienvenidalOpen] = useState(() => {
        const storedChoice = sessionStorage.getItem('modalChoice');
        return storedChoice === null;
      });

    useEffect(() => {
        let timeout;
        const video = videoRef.current;
        const contenedor = contenedorRef.current;
        const handleTimeUpdate = () => setProgress(video.currentTime);
        const handleDurationChange = () => setDuration(video.duration);
        const handleMouseEnter = () => setIsHover(true);
        const handleMouseLeave = () => setIsHover(false);
        const handleMouseMove = () => setIsMoving(true);
        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("durationchange", handleDurationChange);
        contenedor.addEventListener("mouseenter", handleMouseEnter);
        contenedor.addEventListener("mouseleave", handleMouseLeave);
        contenedor.addEventListener("mousemove", handleMouseMove);
        contenedor.addEventListener("mousemove", function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            setIsMoving(false);
        }, 3000);
        },[]);

        /////////// Inicio: Observador 
        const observer = new IntersectionObserver(
            ([entry]) => {
              if (contenedor && playing) {
                if (entry.isIntersecting) {
                  video.play();
                  playing = true;
                } else {
                  video.pause();
                  playing = false;
                }
              }
            },
            { threshold: 0.3 }
          );
      
          if (contenedor) {
            observer.observe(contenedor);
          }
        /////////// Fin: Observador 

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("durationchange", handleDurationChange);
            contenedor.removeEventListener("mouseenter", handleMouseEnter);
            contenedor.removeEventListener("mouseleave", handleMouseLeave);
            contenedor.removeEventListener("mousemove", handleMouseMove);

            /////////// Inicio: Observador 
            if (contenedor.current) {
                observer.unobserve(contenedor);
              }
            /////////// Fin: Observador
        };
    }, []);

    const togglePlay = useCallback(() => {
        const video = videoRef.current;
        if(video.paused) {
            video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    }, []);

    const toogleAudio = useCallback(() => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    }, [videoRef, isMuted]);

    const handleVolumeChange = useCallback(e => {
        const newVolume = e.target.value;
        videoRef.current.volume = newVolume;
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
    }, [videoRef]);

    const handlePlaybackRateChange = useCallback(e => {
        const newPlaybackRate = e.target.value;
        videoRef.current.playbackRate = newPlaybackRate;
        setPlaybackRate(newPlaybackRate);
    }, []);

    const toggleFullScreen = useCallback(() => {
        const video = videoRef.current;
        if(!isFullScreen) {
            if(video.requestFullscreen) {
                video.requestFullscreen();
            } else if(video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if(video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if(video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        } else {
            if(document.fullscreenElement) {
                document.exitFullscreen();
            } else if(document.mozFullScreenElement) {
                document.mozCancelFullScreen();
            } else if(document.webkitFullscreenElement) {
                document.webkitExitFullscreen();
            } else if(document.msFullscreenElement) {
                document.msExitFullscreen();
            }
        }
        setIsFullScreen(!isFullScreen);
    }, []);

    const handleProgressChange = useCallback(e => {
        const newProgress = e.target.value;
        videoRef.current.currentTime = newProgress;
        setProgress(newProgress);
    }, []);

    useEffect(() => {
        setShowControls(playing && (isHover || !isMoving));
    }, [playing, isHover, isMoving]);

    const handleVideoMute = () => {
        setIsMuted(videoRef.current.muted);
      };

    const handleReproducirVideo = () => {
        videoRef.current.play();
        setPlaying(true);
        setIsMuted(false);
    };

    const handlePausarVideo = () => {
        videoRef.current.pause();
        setPlaying(false);
    };

    const handleCloseModalBienvenida = (choice) => {
        sessionStorage.setItem('modalChoice', choice); // Almacenar la elección
        setIsModaBienvenidalOpen(false);
      };

  return (
    <>
    <div ref={contenedorRef}>
      <video className="video"
        ref={videoRef}
        src={url}
        height={height}
        width={width}
        onClick={togglePlay}
        onVolumeChange={handleVideoMute}
        sandbox="allow-scripts allow-same-origin"
      />
      <BotonMute ref={botonMuteRef} funcion={toogleAudio} isMuted={isMuted} setIsMuted={setIsMuted} />
      <BotonFullScreen toggleFullscreen={toggleFullScreen} isFullscreen={isFullScreen} />
      {
      <VideoControles className="controles"
        showControls={showControls}
        progress={progress}
        duration={duration}
        isplaying={playing}
        volume={volume}
        playbackRate={playbackRate}
        isFullScreen={isFullScreen}
        togglePlay={togglePlay}
        handleVolumeChange={handleVolumeChange}
        handlePlaybackRateChange={handlePlaybackRateChange}
        toggleFullScreen={toggleFullScreen}
        handleProgressChange={handleProgressChange}
      />
      }
    </div>
    <ReproducirEnYouTube videoId="-Ou5c3A225k" />
    <ModalBienvenida
        isOpen={isModalBienvenidaOpen}
        onClose={handleCloseModalBienvenida}
        onAceptar={handleReproducirVideo}
        onDenegar={handlePausarVideo}
    />
    </>
  );
};

export default React.memo(VideoPlayer);
