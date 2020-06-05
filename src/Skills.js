import React from "react";
import "./Alljobs.css";

const Skills = ({ job, addList }) => {
  return (
    <article className="mlAauto">
      <button className="skill" onClick={() => addList(job.role)}>
        {job.role}
      </button>
      <button className="skill" onClick={() => addList(job.level)}>
        {job.level}
      </button>
      {job.languages.map((el, i) => {
        return (
          <button className="skill" key={i} onClick={() => addList(el)}>
            {el}
          </button>
        );
      })}
    </article>
  );
};

export default Skills;
