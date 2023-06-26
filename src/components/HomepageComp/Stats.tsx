
import { StatStyles } from "@/styles/HomepageStyles/Stats";
import React, { FunctionComponent } from "react";

const Stats: FunctionComponent = () => {
  return (
    <StatStyles>
      <div className="short">
        <div className="one">
          <h4>2k+</h4>
          <p>Present/Past Interns</p>
        </div>
        <hr />
        <div className="one">
          <h4>15</h4>
          <p>Courses</p>
        </div>
        <hr />
        <div className="one">
          <h4>25+</h4>
          <p>Tutors</p>
        </div>
      </div>
    </StatStyles>
  );
};

export default Stats;
