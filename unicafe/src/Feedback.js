import React from "react";

const Button = (props) => <button {...props} />;

const Feedback = ({ handler }) => {
  return (
    <div>
      <h2>Give feedback</h2>
      <div>
        <Button onClick={handler("good")} children="good" />
        <Button onClick={handler("neutral")} children="neutral" />
        <Button onClick={handler("bad")} children="bad" />
      </div>
    </div>
  );
};

export default Feedback;
