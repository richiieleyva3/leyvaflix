import video from '../../assets/videos/Como-volverse-un-desarrollador-Front-End.mp4';

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video src={video} autoPlay loop muted playsInline />
    </div>
  );
};

export default VideoBanner;
