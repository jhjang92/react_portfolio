import React, { useEffect } from "react";
import {
  getProject,
  useProjectsState,
  useProjectsDispatch,
} from "../ProjectContext";

function Project({ match }) {
  const { id } = match.params;
  const state = useProjectsState();
  const dispatch = useProjectsDispatch();

  const { loading, data: project, error } = state.project;

  const fetchData = () => {
    getProject(dispatch, id);
  };
  useEffect(() => {
    console.log(id);
    fetchData();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error)
    return <div>에러가 발생 하였습니다. 잠시 후 다시 시도 부탁드립니다.</div>;
  if (!project) return <button onClick={fetchData}>다시 시도하기.</button>;
  console.log(project);
  console.log("Project");
  return (
    <article>
      <h3>{project.title}</h3>
    </article>
  );
}

export default Project;
