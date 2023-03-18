"use client"
import { CircularProgressbar } from 'react-circular-progressbar';

const CircleForTask = () => {
  return (
    <>
      <CircularProgressbar
        className={"fill-white font-bold stroke-main100 "}
        value={50}
        strokeWidth={15}
      />
    </>
  );
}

export default CircleForTask