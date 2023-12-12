import React, { useContext } from "react";
import { FaBirthdayCake, FaUniversity } from "react-icons/fa";
import { MdLocationOn, MdSchool } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";

import { AppContext } from "../AppContext";

const ContentProfile = () => {
  const { theme, skills, profile } = useContext(AppContext);

  return (
    <div className={theme ? "flex h-fit justify-center bg-slate-900" : "flex h-fit justify-center bg-slate-100"}>
      <div className="grid justify-items-center">
        <div className="flex flex-row py-10 px-4">
          <div className="pr-14 grid justify-items-center">
            <p className={theme ? "text-4xl lg:text-5xl xl:text-5xl pb-7 text-indigo-500" : "text-4xl lg:text-5xl xl:text-5xl pb-7 text-indigo-600"}>Skills</p>
            <div className="grid grid-rows-4 grid-flow-col gap-2">
              {skills.map((item, index) => {
                return (
                  <div className="flex flex-col items-center" key={item}>
                    <img className="h-8 w-8 lg:h-10 lg:w-10 xl:h-10 xl:w-10 drop-shadow-lg" alt="icon" src={require(`../assets/icons/${index + 1}.png`)} />
                    <p className={theme ? "text-sm lg:text-base xl:text-base text-slate-200" : "text-sm lg:text-base xl:text-base"}>{item}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid justify-items-center content-start">
            <p className={theme ? "text-4xl lg:text-5xl xl:text-5xl text-indigo-500 pb-7" : "text-4xl lg:text-5xl xl:text-5xl text-indigo-600 pb-7"}>Profile</p>
            <div className="flex flex-col">
              <div className="flex flex-row items-center text-base lg:text-lg xl:text-lg pb-1">
                <FaBirthdayCake className={theme ? "text-indigo-500 mr-2 text-2xl lg:text-3xl xl:text-3xl" : "text-indigo-600 mr-2 text-2xl lg:text-3xl xl:text-3xl"} />
                <p className={theme ? "text-slate-200" : ""}>{profile.birthDate}</p>
              </div>
              <div className="flex flex-row items-center text-base lg:text-lg xl:text-lg pb-1">
                <MdLocationOn className={theme ? "text-indigo-500 mr-2 text-2xl lg:text-3xl xl:text-3xl" : "text-indigo-600 mr-2 text-2xl lg:text-3xl xl:text-3xl"} />
                <p className={theme ? "text-slate-200" : ""}>{profile.city}</p>
              </div>
              <div className="flex flex-row items-center text-base lg:text-lg xl:text-lg pb-1">
                <MdSchool className={theme ? "text-indigo-500 mr-2 text-2xl lg:text-3xl xl:text-3xl" : "text-indigo-600 mr-2 text-2xl lg:text-3xl xl:text-3xl"} />
                <p className={theme ? "text-slate-200" : ""}>{profile.bachelor}</p>
              </div>
              <div className="flex flex-row items-center text-base lg:text-lg xl:text-lg pb-1">
                <FaUniversity className={theme ? "text-indigo-500 mr-2 text-2xl lg:text-3xl xl:text-3xl" : "text-indigo-600 mr-2 text-2xl lg:text-3xl xl:text-3xl"} />
                <p className={theme ? "text-slate-200" : ""}>{profile.master}</p>
              </div>
              <div className="flex flex-row items-center text-base lg:text-lg xl:text-lg pb-1">
                <BsBriefcaseFill className={theme ? "text-indigo-500 mr-2 text-2xl lg:text-3xl xl:text-3xl" : "text-indigo-600 mr-2 text-2xl lg:text-3xl xl:text-3xl"} />
                <p className={theme ? "text-slate-200" : ""}>{profile.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentProfile;
