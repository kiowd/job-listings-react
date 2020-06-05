import React from "react";
import "./Alljobs.css";

import { Image, Container } from "react-bootstrap";

const Alljobs = ({ data }) => {
  return (
    <Container className="pg-3">
      {data.map((job, i) => {
        return (
          <section className="ro ">
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
              <article className="mlAauto">
                <button className="skill">{job.role}</button>
                <button className="skill">{job.level}</button>
                {job.languages.map(el => {
                  return <button className="skill">{el}</button>;
                })}
              </article>
            </div>
          </section>
        );
      })}
    </Container>
  );
};

export default Alljobs;
