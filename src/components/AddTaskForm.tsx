"use client"
import { useState } from "react";
import Counter from "./Counter";

const AddTaskForm = () => {
    const [count, setCount] = useState<number>(1);
  return (
    <form className="w-full p-2 py-5 gap-2 flex justify-center  flex-col">
      <section className="flex flex-col ">
        <label className="px-3 text-sm font-normal text-font/80">
          Task name :
        </label>
        <input
          placeholder="write your task name"
          type="text"
          className="placeholder:text-font/20 focus:placeholder:text-font/50 w-full h-10 p-1 px-2 rounded-lg bg-black/40 border-2 outline-none border-main100/20 focus:border-main100"
        />
      </section>

      <section className="px-2 flex flex-col ">
        <label className="px-1 text-sm font-normal text-font/80">
          Number of rounds :
        </label>
        <Counter count={count} setCount={setCount} max={20} />
      </section>
    </form>
  );
}

export default AddTaskForm