"use client"
import war from "../../public/Audiomachine-AboveandBeyond.mp3";
import war1 from "../../public/Audiomachine-AbsoluteMagnitude.mp3";
import war2 from "../../public/Audiomachine-Apotheosis.mp3";
import war3 from "../../public/Audiomachine-AshesofTime .mp3";
import war4 from "../../public/Audiomachine-BloodandStone.mp3";
import SoundPlayer from "./SoundPlayer";
import warImg from "../../public/war.png";
import warwar1 from "../../public/war1.png";
import warwar2 from "../../public/war2.png";
import warwar3 from "../../public/war3.png";
import warwar4 from "../../public/war4.png";

const Sounds = () => {
  return (
    <section className="w-full p-5 flex justify-center items-center gap-5">
      <SoundPlayer src={war} img={warImg} />
      <SoundPlayer src={war1} img={warwar1} />
      <SoundPlayer src={war2} img={warwar2} />
      <SoundPlayer src={war3} img={warwar3} />
      <SoundPlayer src={war4} img={warwar4} />
    </section>
  );
}

export default Sounds