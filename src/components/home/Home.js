import React, { useEffect } from "react";
import HomeContent from "./HomeContent";
import "../../styles/home/Home.scss";
import {
  getProjects,
  useProjectsState,
  useProjectsDispatch,
} from "../ProjectContext";

function Home() {
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
    <section className="Home">
      <h2>Portfolio - 포트폴리오</h2>
      {projects.map((data) => (
        <HomeContent key={data.id} data={data} />
      ))}
    </section>
  );
}

export default Home;
