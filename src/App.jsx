import { useState, createContext  } from "react"

import { Container } from './components/Container/Container';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export const MyContext = createContext();

export const App = () => {

  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handlerClick = (e) => {
    const option = e.target.id;
    setOptions((prev) => {
      return {
        ...prev,
        [option]: prev[option] + 1,
      };
  });
  }

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = options;
    const positiveFeedback = Math.floor(good / (good + neutral + bad) * 100);
    return positiveFeedback;
  }

  return (
    <MyContext.Provider value={{handlerClick,options,countTotalFeedback, countPositiveFeedbackPercentage}}>
      <Container>
      <Section title="Please leave feedback">
          <FeedbackOptions/>
      </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? <Statistics/> : <Notification message="There is no feedback"/>}
        </Section>
      </Container>
    </MyContext.Provider>
    )
}


