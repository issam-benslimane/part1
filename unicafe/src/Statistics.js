import React from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ feedbacks: { good, bad, neutral } }) => {
  const getTotal = () => good + bad + neutral;
  const getAverage = () => (good - bad) / getTotal();
  const getPositive = () => good / getTotal();
  const isFeedbackGiven = () => getTotal() > 0;

  const emptyFeedbackWrapper = <p>No feedback given</p>;

  const feedbackStatsWrapper = (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={getTotal()} />
        <StatisticLine text="average" value={getAverage()} />
        <StatisticLine text="positive" value={`${getPositive()}%`} />
      </tbody>
    </table>
  );
  return (
    <div>
      <h2>Statistics</h2>
      {isFeedbackGiven() ? feedbackStatsWrapper : emptyFeedbackWrapper}
    </div>
  );
};

export default Statistics;
