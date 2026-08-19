import {useState,useCallback} from 'react';
import QUESTIONS from '../questions';
import quizCompleteImage from '../assets/quiz-complete.png';
import Question from './Question';
export default function Quiz () {
  

   // const [activeQuestionIndex,setActiveQuestionIndex] = useState(0); 
    const [answerState,setAnswerState] = useState(""); 
  
    const [userAnswers,setUserAnswers] = useState([]); 
    const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState("answered");
        setUserAnswers((prevUserAnwser) => {
           return  [...prevUserAnwser,selectedAnswer];
        });

        setTimeout(()=>{
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState("correct");
            } else {
                setAnswerState("wrong");
            }
            setTimeout(() => { 
                setAnswerState("");
            },2000);
        },1000)
    },[activeQuestionIndex]);

    const  handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    if(quizIsComplete) {
        return <div id='summary'> 
                    <img src={quizCompleteImage} alt="Quiz completed image" />
                    <h2>Quiz Completed!</h2>
                </div>;
    }
    

 
    return  (
    <div id='quiz'>
        <Question key={activeQuestionIndex} questionText = {QUESTIONS[activeQuestionIndex].text} answers={QUESTIONS[activeQuestionIndex].answers} onSelectAnswer={handleSelectAnswer} selectdAnswer={userAnswers[userAnswers.length - 1]} answerState={answerState} onSkipAnswer={handleSkipAnswer} />
    </div>
    );
}