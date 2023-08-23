import { Outlet } from "react-router-dom"
import { useState } from 'react';
import htmlques from "./htmlques"
import "../style/quiz.css";

let Quizhtml=()=>{

    
    const [Questionidx,setQuestionidx]=useState(0);
    const [score,setScore]=useState(0);
    const [showScore,setshowScore]=useState(false);
    const Currentquestion = htmlques[Questionidx];

    const selectOption = (idx)=>{
        console.log(idx);
        if(Currentquestion.answer === idx){
            setScore(score+1);
        }
        const nextQue = Questionidx + 1;
        if(nextQue < htmlques.length){
        setQuestionidx(Questionidx+1);
    }
    else{
        setshowScore(true);
    }
    };

    const retake =()=>{
        setQuestionidx(0);
        setScore(0);
        setshowScore(false);
    }

    return(
        <div className="quiz">
    
        {
            showScore ?
             (
            <>
                <h2>Your Score is: {score}</h2>
                <button onClick={retake}>ReTake Quiz</button>
             </>
             ) : (
                <div className="ques">
            <h2>{Currentquestion.question}</h2>
            <div className="opt">
                <ul className="quizul">
                    {Currentquestion.options.map((options,i)=>{
                        return <li className="quizli" onClick={()=>selectOption(i)}>{options}</li>
                    })}
                </ul>
            </div>
        </div>
            )
        }
        
        <Outlet/>
    </div>
    )
}

export default Quizhtml;