import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GiGorilla } from "react-icons/gi";
import { toast } from 'react-toastify';

import { AppContext } from "../AppContext";

import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div className={theme ? "flex h-fit justify-center bg-slate-950" : "flex h-fit justify-center bg-slate-100"}>
      <div className="flex flex-col mx-4">
        <div className="flex flex-row justify-end pt-6 items-center">
          <div className="flex items-end" data-cy="header-name-surname">
            <p className={theme ? "text-base lg:text-lg xl:text-lg text-slate-200" : "text-base lg:text-lg xl:text-lg text-indigo-600"}>kagan berberoglu |</p>
            <GiGorilla
              className={theme ? "text-2xl lg:text-3xl xl:text-3xl mx-1 cursor-pointer text-indigo-500" : "text-2xl lg:text-3xl xl:text-3xl mx-1 cursor-pointer"}
              onClick={(e) => {
                e.preventDefault();
                toast.info("Roooaaaarrrr!", {
                  position: "top-center",
                });
              }}
            />
            <p className={theme ? "text-base lg:text-lg xl:text-lg text-slate-200 mr-1" : "text-base lg:text-lg xl:text-lg text-indigo-600 mr-1"}>|</p>
          </div>
          <DarkModeSwitch
            moonColor="#e2e8f0"
            sunColor="#4f46e5"
            size={25}
            checked={theme}
            onClick={(e) => {
              e.preventDefault();
              setTheme(!theme);
            }}
          />
        </div>
        <div className="flex flex-row items-center pt-4 pb-10">
          <img className={theme ? "rounded-l-lg h-64 w-44 drop-shadow-lg" : "rounded-l-lg h-64 w-44 drop-shadow-lg"} alt="kagan" src={require("../assets/images/1.jpg")} />
          <div className={theme ? "grid content-center rounded-r-lg bg-slate-900 h-64 px-3 drop-shadow-lg" : "grid content-center rounded-r-lg bg-slate-100 h-64 px-3 drop-shadow-lg"}>
            <p className={theme ? "text-xl lg:text-2xl xl:text-2xl text-slate-200" : "text-xl lg:text-2xl xl:text-2xl text-indigo-600"}>Hello!</p>
            <p className={theme ? "text-4xl lg:text-6xl xl:text-6xl pt-4 text-slate-200" : "text-4xl lg:text-6xl xl:text-6xl pt-4 text-indigo-600"}>I am a Software Developer...</p>
            <p className={theme ? "text-base lg:text-2xl xl:text-2xl py-4 text-indigo-500" : "text-base lg:text-2xl xl:text-2xl py-4"}>...who likes to craft solid and scalable full-stack products with great user experiences.</p>
            <div className="flex flex-row">
              <Link to={"https://github.com/kaganberberoglu"} target="_blank">
                <button className="bg-slate-200 flex flex-row items-center rounded p-1 px-3 mr-2 hover:bg-slate-300">
                  <FaGithub className="text-base lg:text-2xl xl:text-2xl text-indigo-600" />
                  <p className="text-sm lg:text-xl xl:text-xl pl-1 text-indigo-600">Github</p>
                </button>
              </Link>
              <Link to={"https://www.linkedin.com/in/kagan-berberoglu"} target="_blank">
                <button className="bg-slate-200 flex flex-row items-center rounded p-1 px-3 hover:bg-slate-300">
                  <FaLinkedinIn className="text-base lg:text-2xl xl:text-2xl text-indigo-600" />
                  <p className="text-sm lg:text-xl xl:text-xl pl-1 text-indigo-600">LinkedIn</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={theme ? "" : "bg-indigo-600 h-0.5 w-full"} />
      </div>
    </div>
  );
}

export default Header;
