import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <>
      <button
        className={css.optionsBtn}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionsBtn}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionsBtn}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback ? (
        <button
          className={css.optionsBtn}
          type="button"
          onClick={resetFeedback}
        >
          Reset
        </button>
      ) : null}
    </>
  );
};

export default Options;
