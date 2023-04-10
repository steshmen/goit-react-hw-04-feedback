import { useState } from 'react';

import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = e => {
    const { name } = e.target;
    setOptions(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const total = Object.values(options).reduce((acc, el) => (acc += el), 0);
  const positivePercentage = Math.round((options.good * 100) / total) || 0;
  const { good, neutral, bad } = options;
  const optionsNames = Object.keys(options);

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={optionsNames} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistic">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
