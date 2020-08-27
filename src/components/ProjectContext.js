import React, { createContext, useReducer, useContext } from "react";
import * as api from "../components/common/api";
import createAsyncDispatcher, {
  initialAsyncState,
  createAsyncHandler,
} from "./common/asyncActionUtils";

const initialState = {
  projects: initialAsyncState,
  project: initialAsyncState,
};

const projectsHandler = createAsyncHandler("GET_PROJECTS", "projects");
const projectHandler = createAsyncHandler("GET_PROJECT", "project");
function projectsReducer(state, action) {
  switch (action.type) {
    case "GET_PROJECTS":
    case "GET_PROJECTS_SUCCESS":
    case "GET_PROJECTS_ERROR":
      return projectsHandler(state, action);
    case "GET_PROJECT":
    case "GET_PROJECT_SUCCESS":
    case "GET_PROJECT_ERROR":
      return projectHandler(state, action);
    default:
      throw new Error("Unhandled action type", action.type);
  }
}

const ProjectsStateContext = createContext(null);
const ProjectsDispatchContext = createContext(null);

export function ProjectsProvider({ children }) {
  const [state, dispatch] = useReducer(projectsReducer, initialState);
  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
}

export function useProjectsState() {
  const state = useContext(ProjectsStateContext);
  if (!state) {
    throw new Error("Cannot find ProjectsProvider");
  }
  return state;
}
export function useProjectsDispatch() {
  const dispatch = useContext(ProjectsDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find ProjectsDispatchProvider");
  }
  return dispatch;
}

export const getProjects = createAsyncDispatcher(
  "GET_PROJECTS",
  api.getProjects
);
export const getProject = createAsyncDispatcher("GET_PROJECT", api.getProject);
