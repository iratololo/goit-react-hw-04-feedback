import { useContext } from 'react';

import { MyContext } from 'App';
import { FeedbackOption, FeedbackRow } from "./FeedbackOptions.stayled"

export const FeedbackOptions = () => {
    const context = useContext(MyContext);
    return (
            <FeedbackRow>
                {Object.keys(context.options).map(item => {
                    return (<FeedbackOption key={item} onClick={context.handlerClick} id={item} type='button'>{item}</FeedbackOption>)
                })}
            </FeedbackRow>
        );
}

