import React from 'react';

import Header from "./components/Header";
import ContentProfile from "./components/ContentProfile";
import ContentProjects from "./components/ContentProjects";
import Footer from "./components/Footer";
import useLocalStorage from "./useLocalStorage";
import { AppContext } from "./AppContext";

const App = () => {
  const skills = [
    "HTML",
    "REACT",
    "EXPRESS",
    "TAILWIND",
    "CSS",
    "REDUX",
    "SQL",
    "FIGMA",
    "JAVASCRIPT",
    "NODE",
    "BOOTSTRAP",
    "PHOTOSHOP"
  ];

  const profile = {
    birthDate: "06.10.1993",
    city: "Potsdam",
    bachelor: "METU | Public ADM | 2017",
    master: "Gisma Uni | Data & AI | 2025",
    role: "Software Developer",
  }

  const projects = [
    {
      id: 1,
      name: "Pizza Corner",
      details: "In this project, a sample study similar to food ordering apps was carried out.",
      github: "https://github.com/kaganberberoglu/Project-2",
      projectLink: "https://cornerpizza.netlify.app",
    },
    {
      id: 2,
      name: "The Score",
      details: "In this project, a sample study similar to Fantasy Premier League game was made.",
      github: "https://github.com/kaganberberoglu/Project-3",
      projectLink: "https://thescore.netlify.app",
    }
  ];

  const [theme, setTheme] = useLocalStorage("Night Mode", false);

  return (
    <AppContext.Provider value={{ theme, setTheme, skills, profile, projects }}>
      <div className="App">
        <Header />
        <ContentProfile />
        <ContentProjects />
        <Footer />
      </div>
    </AppContext.Provider >
  );
}

export default App;
