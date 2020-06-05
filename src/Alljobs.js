import React, { useState } from "react";
import "./Alljobs.css";
import Skills from "./Skills";

import { Image, Container } from "react-bootstrap";

const Alljobs = ({ data }) => {
  const [filter, setFilter] = useState([]);
  const [state, setState] = useState(data);

  const addList = skill => {
    setFilter([...filter, skill]);
    const fX = state.filter(
      (el, i) =>
        el.role.toLowerCase() === skill.toLowerCase() ||
        el.level === skill ||
        el.languages.some(el => el === skill)
    );
    setState(fX);
  };

  const removeList = skill => {
    const fX = filter.filter((el, i) => el !== skill);
    setFilter(fX);
    setState(data);
  };

  const clearList = e => {
    e.preventDefault();
    setFilter([]);
    setState(data);
  };

  return (
    <Container className="pg-3">
      {filter.length > 0 ? (
        <section className="filter-container ">
          <div className="filter d-flex flex-wrap justify-content-between">
            {filter &&
              filter.map((el, i) => {
                return (
                  <button
                    className="skill"
                    key={i}
                    onClick={() => removeList(el)}
                  >
                    {el}
                    <span className="cross">x</span>
                  </button>
                );
              })}
            <button className="skill" onClick={clearList}>
              clear
            </button>
          </div>
        </section>
      ) : null}
      {state.map((job, i) => {
        return (
          <section className={`ro  ${job.featured && `borderLeft`}`} key={i}>
            <div className="skillsContainer d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex flex-wrap">
                <Image src={job.logo} key={i} className="img" />
                <div className="post">
                  <p className="company">
                    {job.company}{" "}
                    {job.new ? <button className="new">NEW!</button> : null}
                    {job.featured ? (
                      <button className="featured">FEATURED</button>
                    ) : null}
                  </p>

                  <p className="position">{job.position}</p>
                  <p className="location">
                    {job.postedAt} . {job.contract} . {job.location}
                  </p>
                  <hr />
                </div>
              </div>

              <Skills job={job} addList={addList} key={i} />
            </div>
          </section>
        );
      })}
    </Container>
  );
};

export default Alljobs;
