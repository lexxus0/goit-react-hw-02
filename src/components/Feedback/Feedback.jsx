// import css from "./Feedback.module.css";

const Feedback = ({
  good,
  neutral,
  bad,
  total,
  hasFeedback,
  positiveFeedback,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {good || neutral || bad ? <p>Total: {total}</p> : null}
      {hasFeedback && <p>Positive: {positiveFeedback}%</p>}
    </div>
  );
};

export default Feedback;
