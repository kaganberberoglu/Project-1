import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../AppContext";

const ContentProjects = () => {
  const { projects, theme } = useContext(AppContext);

  return (
    <div className={theme ? "flex justify-center h-fit bg-slate-950 pb-10" : "flex justify-center h-fit bg-slate-100 pb-10"}>
      <div className="flex-col grid justify-items-center">
        <div className="px-4">
          <div className={theme ? "" : "bg-indigo-600 h-0.5 w-full"} />
          <p className={theme ? "text-indigo-500 text-4xl xl:text-5xl pb-5 pt-10" : "text-indigo-600 text-4xl xl:text-5xl pb-5 pt-10"}>Projects</p>
          {projects.map((item) => {
            return (
              <div className="flex flex-row mb-5" key={item.id}>
                <div>
                  <img className="h-auto w-80 rounded-l-lg drop-shadow-lg" alt="project" src={require(`../assets/projects/${item.id}.png`)} />
                </div>
                <div className={theme ? "h-auto w-96 bg-slate-900 rounded-r-lg drop-shadow-lg grid content-center py-4" : "h-auto w-96 bg-slate-100 rounded-r-lg drop-shadow-lg grid content-center py-4"}>
                  <div key={item.id}>
                    <div className="pb-1">
                      <p className={theme ? "text-xl lg:text-2xl xl:text-2xl text-indigo-500 px-3" : "text-xl lg:text-2xl xl:text-2xl text-indigo-600 px-3"}>{item.name}</p>
                    </div>
                    <div>
                      <p className={theme ? "text-sm lg:text-base xl:text-base px-3 text-slate-200" : "text-sm lg:text-base xl:text-base px-3"}>{item.details}</p>
                    </div>
                  </div>
                  <div className={theme ? "flex flex-row pl-3 pt-1" : "flex flex-row pl-3 pt-1"}>
                    <Link to={item.projectLink} target="_blank" className={theme ? "mr-3 hover:text-slate-400 text-sm lg:text-base xl:text-base bg-indigo-500 text-slate-200 rounded px-2 py-1" : "mr-3 hover:text-slate-300 text-sm lg:text-base xl:text-base bg-indigo-600 text-slate-100 rounded px-2 py-1"}>
                      <u>View Site</u>
                    </Link>
                    <Link to={item.github} target="_blank" className={theme ? "hover:text-slate-400 text-sm lg:text-base xl:text-base bg-indigo-500 text-slate-200 rounded px-2 py-1" : "hover:text-slate-300 text-sm lg:text-base xl:text-base bg-indigo-600 text-slate-100 rounded px-2 py-1"}>
                      <u>Github</u>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default ContentProjects;
