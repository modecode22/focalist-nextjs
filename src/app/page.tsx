import AddTask from "@/components/AddTask";
import MainNav from "@/components/MainNav";
import Sounds from "@/components/Sounds";
import Task from "@/components/Task";
import Timer from "@/components/Timer";
import { ScrollArea } from "@/components/ui/scrollarea";
import { MdOutlineMoreVert } from "react-icons/md";


export default function Home() {
  return (
    <>
      <Timer />
      <main className="flex  items-center justify-center w-full h-full">
        <main className="col-span-6 flex flex-col  items-center w-full h-full gap-5 p-5">
          <header className="flex justify-evenly items-center w-full">
            <h1 className="font-sans text-xl">Today Tasks</h1>
            <MainNav />
          </header>
          <main className="flex flex-col items-center mt-10 gap-10 w-full h-full px-10">
            {/* <section className="flex items-center gap-5">
              <button></button>
            </section> */}
            <ScrollArea className="h-full mb-48 max-w-md w-full  rounded-md border border-font/10  p-4">
              <main className="flex flex-col  items-center w-full h-full gap-2">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <AddTask />
              </main>
            </ScrollArea>
          </main>
        </main>
        <main></main>
      </main>
    </>
  );
}
