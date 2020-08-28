import React from "react";

import { Route, Switch } from "react-router-dom";
import ProjectList from "./ProjectList";
import Project from "./Project";

function Projects() {
  return (
    <Switch>
      <Route path="/projects/list" component={ProjectList} />
      <Route path="/projects/:id" component={Project} />
    </Switch>
  );
}

export default Projects;
