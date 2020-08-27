import React from "react";
import "../../styles/sub/About.scss";
import { AiFillGithub } from "react-icons/ai";

function About() {
  return (
    <>
      <article className="About">
        <h3>About</h3>

        <dl>
          <dt>장재혁 (jaehyuk jang)</dt>
          <dd>
            <p>
              게임과 개발을 사랑하는 개발자 입니다. <br />
              모바일게임회사에서 다양한 업무를 경험했으며 현재는 FE 프론트엔드를
              기초부터 쌓아가고 있습니다. <br />
              개발하는 그 자체를 좋아하며, 프론트엔드, 백엔드, 네이티브 모두
              좋아합니다. <br />
              사용자들이 최소한 불편함을 느끼지 않도록 늘 고민 합니다.
            </p>
          </dd>
        </dl>

        <dl>
          <dt>Tech</dt>
          <dd>
            <p>
              프론트엔드의 기본기인 <br />
              HTML5(Semantic Markup), CSS3(sass-scss), Javascript(vanilla, es6),
              ajax(RESTAPI) 를 중점적으로 기본기를 다졌습니다. <br />
              현재는 React 의 기본기를 익히며 익숙해지도록 자주 사용하려
              노력합니다. <br />
            </p>
          </dd>
        </dl>
        <div className="icon">
          <AiFillGithub />
        </div>
      </article>
    </>
  );
}

export default About;
