import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Project from "./pages/Project";
import "./styles/Main.scss";

function App() {
  return (
    <>
      <Header />

      <main className="Main">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
      </main>
    </>
  );
}

export default App;
