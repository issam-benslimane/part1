import React from "react";

const Part = ({ props: { name, exercise } }) => (
  <p>
    {name} {exercise}
  </p>
);

export default Part;
