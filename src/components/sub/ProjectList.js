import React, { useEffect } from "react";
import "../../styles/sub/PorjectList.scss";
import {
  getProjects,
  useProjectsState,
  useProjectsDispatch,
} from "../ProjectContext";
import { Link } from "react-router-dom";

function ProjectListItem({ projects }) {
  return (
    <ul className="ProjectListItem">
      {projects.map((data) => (
        <li key={data.id}>
          <Link to={`${data.link}/${data.id}`}>
            <strong>{data.title}</strong>
            <p>{data.content}</p>
            <span>{data.date}</span>
            <div className="thumBox">
              <img src={data.thumbnail} alt={data.alt}></img>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ProjectList() {
  const state = useProjectsState();
  const dispatch = useProjectsDispatch();

  const { loading, data: projects, error } = state.projects;

  const fetchData = () => {
    getProjects(dispatch);
  };
  useEffect(() => {
    if (projects) return;
    fetchData();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생..</div>;
  if (!projects)
    return (
      <button type="button" onClick={fetchData}>
        불러오기
      </button>
    );
  return (
    <section className="ProjectList">
      <h2>Project List</h2>
      <ProjectListItem projects={projects} />
    </section>
  );
}

export default ProjectList;
