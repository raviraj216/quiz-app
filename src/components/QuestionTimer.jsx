import { useEffect, useState } from "react";

export default function QuestionTimer({timeout , onTimeOut }) {
    
    const [remainingTime,setRemainingTime] = useState(timeout);
   
    useEffect(() =>{
        console.log("SET_TIMEOUT")
        const timer = setTimeout(onTimeOut , timeout);
        return () => {
            clearTimeout(timer);
        }
    } ,[timeout,onTimeOut]);

    useEffect(() =>{
         console.log("SETTING INTERVAL")
       const remainingTimeIntervel = setInterval(()=>{
            setRemainingTime((prevTime) => {
                return prevTime - 100; 
            })
        },100);
        return () => {
            clearInterval(remainingTimeIntervel);
        }
    } ,[]);

    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    );
}