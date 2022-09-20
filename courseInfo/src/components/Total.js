import React from "react";

const Total = ({ parts }) => (
  <p>
    Number of exercises{" "}
    {parts.reduce((sum, { exercises }) => sum + exercises, 0)}
  </p>
);

export default Total;
