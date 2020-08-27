import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import "./styles/Main.scss";
import { ProjectsProvider } from "./components/ProjectContext";
import Home from "./components/home/Home";
import Projects from "./components/sub/Projects";
import About from "./components/sub/About";

function App() {
  return (
    <ProjectsProvider>
      <Header />

      <main className="Main">
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </main>
    </ProjectsProvider>
  );
}

export default App;
