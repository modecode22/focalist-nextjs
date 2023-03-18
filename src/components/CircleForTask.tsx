"use client"
import { CircularProgressbar } from 'react-circular-progressbar';



interface Props {
  completedSubTasks: number;
  totalSubTasks: number;
}

const CircleForTask = ({ completedSubTasks , totalSubTasks} : Props) => {
    const value =  (completedSubTasks * 100)/totalSubTasks 

  return (
    <>
      <CircularProgressbar
        className={"fill-white font-bold stroke-main100  "}
        value={value}
        strokeWidth={15}
      />
    </>
  );
}

export default CircleForTask


