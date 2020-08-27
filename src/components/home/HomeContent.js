import React from "react";
import "../../styles/home/HomeContent.scss";

function HomeContent() {
  return (
    <article className="HomeContent">
      <h2>
        <a href="#">Welaaa Clone Page</a>
      </h2>
      <a href="#" className="thumbnail">
        <img
          src="assets/images/thumbnail/welaaaThumbnail.JPG"
          alt="윌라 썸네일"
        ></img>
      </a>
      <p className="content">
        <a href="#">내용내용내용내용내용</a>
      </p>
      <p className="date">2020-08-20 ~ 2020-08-20</p>
    </article>
  );
}

export default HomeContent;
