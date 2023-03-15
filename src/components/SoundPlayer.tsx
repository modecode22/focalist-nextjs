"use client"

import { useRef, useState } from "react";

type AudioPlayerProps = {
  src: string;
};

const SoundPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handleRestart = () => {
     if (audioRef.current) {
    audioRef.current.currentTime = 0;
     }
    handlePlay();
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime ?? 0);
  };

const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newVolume = Number(event.target.value);
  setVolume(newVolume);
     if (audioRef.current) {
       audioRef.current.volume = newVolume / 100;
     }
};
  return (
    <div>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} />
      <div>
        <button onClick={isPlaying ? handlePause : handlePlay}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleRestart}>Restart</button>
        <div>
          <label htmlFor="volume">Volume:</label>
          <input
            id="volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      <div>Current Time: {currentTime.toFixed(2)}</div>
    </div>
  );
};

export default SoundPlayer;