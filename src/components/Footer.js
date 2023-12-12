import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { AppContext } from "../AppContext";

const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme ? "flex h-fit justify-center bg-slate-900" : "flex h-fit justify-center bg-slate-100"}>
      <center>
        <div className={theme ? "" : "bg-indigo-600 h-0.5 w-full"} />
        <div className="flex-col py-10">
          <p className={theme ? "text-slate-200 text-4xl lg:text-5xl xl:text-5xl" : "text-indigo-600 text-4xl lg:text-5xl xl:text-5xl"}>Send me a message!</p>

          <p className={theme ? "text-base lg:text-lg xl:text-lg py-2 text-indigo-500" : "text-base lg:text-lg xl:text-lg py-2"}>Got a question or proposal, or just want to say hello? Go ahead.</p>

          <p className={theme ? "text-slate-200 text-base lg:text-lg xl:text-lg" : "text-indigo-600 text-base lg:text-lg xl:text-lg"}>
            <u>kagan.berberoglu@gmail.com</u>
          </p>
          <div className="flex flex-row justify-center mt-2">
            <Link to={"https://linkedin.com/in/kagan-berberoglu"} target="_blank">
              <FaLinkedinIn data-cy="linkedin" className={theme ? "text-slate-200 text-lg lg:text-xl xl:text-xl mx-1.5 hover:text-slate-400" : "text-indigo-600 text-lg lg:text-xl xl:text-xl mx-1.5 hover:text-indigo-300"} />
            </Link>

            <Link to={"https://github.com/kaganberberoglu"} target="_blank">
              <FaGithub className={theme ? "text-slate-200 text-lg lg:text-xl xl:text-xl mx-1.5 hover:text-slate-400" : "text-indigo-600 text-lg lg:text-xl xl:text-xl mx-1.5 hover:text-indigo-300"} />
            </Link>

            <Link to={"https://twitter.com/perperakis"} target="_blank">
              <FaTwitter data-cy="twitter" className={theme ? "text-slate-200 text-lg lg:text-xl xl:text-xl mx-1.5 hover:text-slate-400" : "text-indigo-600 text-lg lg:text-xl xl:text-xl mx-1.5 hover:text-indigo-300"} />
            </Link>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Footer;
