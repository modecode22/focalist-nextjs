import { GiFireTail, GiRobe } from "react-icons/gi";
import {FaWarehouse} from "react-icons/fa"
import { IoMdAnalytics } from "react-icons/io";
import Link from "next/link";
import NavLink from "./NavLink";
import AddInHeader from "./AddInHeader";
import { BsMusicNoteList } from "react-icons/bs";
import SoundBtn from "./SoundBtn";
const Header = () => {
  return (
    <header className="z-20 bg-dark200 h-10 shadow-sm shadow-black/10 p-1 px-5 flex justify-between items-center">
      <section className="flex justify-center items-center gap-2">
        <SoundBtn />
        <nav className="ml-5    flex justify-center items-center gap-5">
          <NavLink link={"/"}>
            <FaWarehouse />
            Home
          </NavLink>
          <NavLink link={"/data"}>
            <IoMdAnalytics />
            Data
          </NavLink>
        </nav>
      </section>
      <section className="flex justify-center items-center gap-5">
        <AddInHeader />
        {/* الحافز*/}
        <button className="group p-1 relative border border-transparent hover:border-font/20 rounded-full hover:bg-black/60 w-8 h-8 duration-200 active:border-font/50  active:bg-black/80 flex justify-center items-center">
          <GiFireTail className="w-6 h-6" />
          <div className="z-[60] font-bold text-xs group-hover:scale-100 scale-0 duration-75  absolute w-20 bg-black/60 rounded-lg flex justify-center items-center  top-10 h-6  ">
            Why ?
          </div>
        </button>
        {/* من نحن ؟ */}
        <button className="group relative border border-transparent hover:border-font/20 rounded-full hover:bg-black/60 w-8 h-8 duration-200 active:border-font/50  active:bg-black/80 flex justify-center items-center">
          <GiRobe className="w-6 h-6" />
          <div className="z-[60] font-bold text-xs group-hover:scale-100 scale-0 duration-75  absolute w-20 bg-black/60 rounded-lg flex justify-center items-center  top-10 h-6  ">
            Who ?
          </div>
        </button>
      </section>
    </header>
  );
}

export default Header