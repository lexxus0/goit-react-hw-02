import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem("feedbackValue");
    return storedFeedback
      ? JSON.parse(storedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);

  useEffect(() => {
    const storedFeedback = localStorage.getItem("feedbackValue");
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const hasFeedback =
    feedback.good !== 0 || feedback.neutral !== 0 || feedback.bad !== 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {!hasFeedback ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          hasFeedback={hasFeedback}
          resetFeedback={resetFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
