"use client"
import war from "../../public/war.mp3";
import SoundPlayer from "./SoundPlayer";

const Sounds = () => {
  return (
    <div>
      <SoundPlayer src={war} />
      <SoundPlayer src={war} />
      <SoundPlayer src={war} />
    </div>
  );
}

export default Sounds