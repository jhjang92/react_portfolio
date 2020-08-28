import React, { useRef, useEffect } from "react";
import "../../styles/sub/Project.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  getProject,
  useProjectsState,
  useProjectsDispatch,
  useProjectTargetId,
} from "../ProjectContext";

function Project({ match, history }) {
  const { id } = match.params;
  const state = useProjectsState();
  const dispatch = useProjectsDispatch();
  const targetId = useProjectTargetId();
  const { loading, data: project, error } = state.project;
  const ulTag = useRef(null);
  let idx = 0,
    timeCheck = false;

  const fetchData = () => {
    getProject(dispatch, id);
    targetId.current = id;
  };

  useEffect(() => {
    if (targetId.current === id) return;
    fetchData();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error)
    return <div>에러가 발생 하였습니다. 잠시 후 다시 시도 부탁드립니다.</div>;
  if (!project)
    return (
      <button type="button" onClick={fetchData}>
        다시 시도하기.
      </button>
    );

  const onSlideClick = (e) => {
    if (!timeCheck) {
      timeCheck = true;
      e.currentTarget.className.includes("left") ? idx++ : idx--;
      if (idx > 0) {
        idx = 0;
      } else if (idx < -2) {
        idx = -2;
      }
      ulTag.current.style.transform = `translateX(${idx * 100}%)`;
      setTimeout(() => {
        timeCheck = false;
      }, 400);
    }
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <article className="Project">
      <h2>{project.title}</h2>
      <div className="pageLink">
        <a href={project.website}>WebSite</a>
        <a href={project.github}>GitHub</a>
      </div>
      <div className="slideBox">
        <div className="slider">
          <ul ref={ulTag}>
            {project.src.map((data) => (
              <li key={data.number}>
                <img src={data.img} alt={data.srcAlt}></img>
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="arrowBtn left" onClick={onSlideClick}>
          <BsChevronLeft />
        </button>
        <button type="button" className="arrowBtn right" onClick={onSlideClick}>
          <BsChevronRight />
        </button>
      </div>

      <div className="contents">
        <p>{project.content}</p>
        <p>{project.description}</p>
      </div>
      <div className="etc">
        <button type="button" onClick={goBack}>
          <AiOutlineArrowLeft />
          돌아가기
        </button>
        <span>{project.date}</span>
      </div>
    </article>
  );
}

export default Project;
