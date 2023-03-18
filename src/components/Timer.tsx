"use client"
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdOutlineReplayCircleFilled } from "react-icons/md";
import {TbPlayerPauseFilled} from 'react-icons/tb'
import { BsFillPlayFill } from "react-icons/bs";
const Timer = () => {
  const session = 1500
  const [seconds, setSeconds] = useState(session);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((currentSeconds) => {
          if (currentSeconds === 0) {
            clearInterval(intervalId!);
            setIsRunning(false);
            return session;
          }
          return currentSeconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId!);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setSeconds(session);
    setIsRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = `${seconds % 60}`.padStart(2, "0");
const progressWidth = 100-(seconds * 100) / session;

  return (
    <>
      <section className="duration-100 transition-all group absolute overflow-hidden w-[128px] h-12 bg-black/80  bottom-5 right-1/2 left-1/2 -translate-x-[50%] rounded-xl backdrop-blur-md shadow-black shadow-sm">
        <div
          style={{ width: `${progressWidth}%` }}
          className="duration-100 transition-all absolute bg-gradient-to-br from-main100 to-main200  h-full rounded-sm"
        ></div>
        <div className="duration-100 transition-all group-hover:hidden z-30 absolute w-full  h-full flex justify-center items-center text-2xl font-bold">
          {`${minutes}:${formattedSeconds}`}
        </div>


{!isRunning ? (
            <button
               className="duration-100 transition-all hidden group-hover:flex z-30 absolute w-full  h-full  justify-center items-center text-2xl font-bold"              
               onClick={handleStart}
              disabled={isRunning}
            >
              <BsFillPlayFill />
            </button>
          ) : (
            <section className="gap-5 duration-100 transition-all hidden group-hover:flex z-30 absolute w-full  h-full  justify-center items-center text-2xl font-bold">
              <button
                onClick={handlePause}
                disabled={!isRunning}
                className="rounded-l-full w-12 h-8 flex justify-center items-center  duration-100 transition-all"
              >
                <TbPlayerPauseFilled />
              </button>
              <button
                className="rounded-r-full w-12 h-8 flex justify-center items-center  duration-100 transition-all"
                onClick={handleReset}
              >
                <MdOutlineReplayCircleFilled />
              </button>
            </section>
          )}





      </section>
      {/* <section className="fixed bottom-0 right-1/2 left-1/2 -translate-x-[50%] rounded-t-full  bg-darkform p-2 gap-2 flex flex-col justify-center items-center w-32">
        <div className="w-16">
          <CircularProgressbar
            className={`${
              isRunning
                ? "fill-white stroke-main100/80"
                : "fill-white/50 stroke-main100/40"
            }`}
            value={(seconds * 100) / session}
            text={`${minutes}:${formattedSeconds}`}
          />
        </div>

        <div className=" flex items-end justify-center gap-2 ">
          {!isRunning ? (
            <button
              className="flex justify-center items-center h-8 w-12 rounded-full px-2 p-1 bg-gradient-to-br from-main100/50 to-main200/50 hover:from-main100 hover:to-main200 duration-100 transition-all "
              onClick={handleStart}
              disabled={isRunning}
            >
              <BsFillPlayFill />
            </button>
          ) : (
            <section className="rounded-full h-8  px-2 p-1  flex justify-between items-center">
              <button
                onClick={handlePause}
                disabled={!isRunning}
                className="rounded-l-full w-12 h-8 flex justify-center items-center bg-gradient-to-br from-main100/50 to-main200/50 hover:from-main100 hover:to-main200 duration-100 transition-all"
              >
                <TbPlayerPauseFilled />
              </button>
              <button
                className="rounded-r-full w-12 h-8 flex justify-center items-center bg-gradient-to-br from-main100/50 to-main200/50 hover:from-main100 hover:to-main200 duration-100 transition-all"
                onClick={handleReset}
              >
                <MdOutlineReplayCircleFilled />
              </button>
            </section>
          )}
        </div>
      </section> */}
    </>
  );
}

export default Timer