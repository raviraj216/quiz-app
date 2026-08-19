import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
const TIMEOUT = 10000;

export default function Question({questionText,answers,onSelectAnswer,selectdAnswer,answerState,onSkipAnswer}) {
    return (
         <div id='question'>
                <QuestionTimer  timeout={TIMEOUT} onTimeOut={onSkipAnswer}/>
                <h2>{questionText}</h2>
                <Answers answers={answers} selectdAnswer={selectdAnswer} answerState={answerState} onSelectAnswer={onSelectAnswer}/>
         </div>
    );
}