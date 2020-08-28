import React from "react";
import "../../styles/home/HomeContent.scss";
import { Link } from "react-router-dom";

function HomeContent({ data }) {
  return (
    <article className="HomeContent">
      <Link to={`${data.link}/${data.id}`}>
        <h3>{data.title}</h3>
        <div className="thumbnail">
          <img src={data.thumbnail} alt={data.alt}></img>
        </div>
        <p className="content">{data.content}</p>
      </Link>
      <p className="date">{data.date}</p>
    </article>
  );
}

export default HomeContent;
