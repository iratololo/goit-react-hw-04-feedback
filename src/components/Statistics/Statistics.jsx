import { useContext } from 'react';

import { MyContext } from 'App';
import { StatisticItem, StatisticResult } from "./Statistics.stayled"

export const Statistics = () => {
    const context = useContext(MyContext);
    const { good, neutral, bad } = context.options;
        return (
            <ul>
                <StatisticItem>Good: {good}</StatisticItem>
                <StatisticItem>Neutral: {neutral}</StatisticItem>
                <StatisticItem>Bad: {bad}</StatisticItem>
                <StatisticResult>Total: {context.countTotalFeedback()}</StatisticResult>
                <StatisticResult>Positive feedback: {context.countPositiveFeedbackPercentage()}%</StatisticResult>
            </ul>
        );
}
