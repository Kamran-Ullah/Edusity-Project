import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/collage-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef();
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      onClick={closePlayer}
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
