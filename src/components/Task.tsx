import { FaFly, FaPlay } from "react-icons/fa";
import { GiAchievement, GiButterflyKnife } from "react-icons/gi";
import { IoMdRocket } from "react-icons/io";
import CircleForTask from "./CircleForTask";

const Task = () => {
  return (
    <section className="relative cursor-pointer active:brightness-110 group hover:brightness-105 max-w-xl select-none h-20 p-2 px-4 w-full rounded-xl bg-dark100 flex flex-col justify-between items-center">
      <header className="w-full flex  items-center gap-2 ">
        <section className="w-6 h-6 rounded-lg bg-gradient-to-br from-main100 to-main200 flex justify-center items-center">
          <GiAchievement className="w-5 h-5" />
        </section>
        <h1>Do Things that will make you improve</h1>
      </header>
      <main className="w-full flex  items-center gap-2 justify-between">
        <div className="text-font/50 text-xs font-bold">2/4 Done</div>

        <div className="w-6">
          <CircleForTask />
        </div>
      </main>
      <div className="absolute bottom-0  duration-100 transition-all flex justify-center items-center">
        <IoMdRocket className="w-5 h-5 scale-0 group-hover:scale-100   group-hover:-translate-y-2  duration-200" />
      </div>
    </section>
  );
}

export default Task