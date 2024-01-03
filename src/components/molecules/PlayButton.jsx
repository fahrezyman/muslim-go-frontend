import { useState, useRef } from "react";
import PropTypes from "prop-types";

const PlayButton = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      audio.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  PlayButton.propTypes = {
    audioUrl: PropTypes.string.isRequired,
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} onEnded={handleAudioEnded} />
      <button onClick={togglePlay}>
        {isPlaying ? "Pause Murottal" : "Play Murottal"}
      </button>
    </div>
  );
};

export default PlayButton;
