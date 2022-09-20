import React from "react";
import Part from "./Part";

const Content = ({ parts }) => (
  <div>
    {parts.map((props, key) => (
      <Part props={props} key={key} />
    ))}
  </div>
);

export default Content;
