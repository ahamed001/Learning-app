import { Outlet } from "react-router-dom"
import { useState } from 'react';
import cssques from "./cssques"
import "../style/quiz.css";

let Quizcss=()=>{

    
    const [Questionidx,setQuestionidx]=useState(0);
    const [score,setScore]=useState(0);
    const [showScore,setshowScore]=useState(false);
    const Currentquestion = cssques[Questionidx];

    const selectOption = (idx)=>{
        console.log(idx);
        if(Currentquestion.answerscss === idx){
            setScore(score+1);
        }
        const nextQue = Questionidx + 1;
        if(nextQue < cssques.length){
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
            <h2>{Currentquestion.questioncss}</h2>
            <div className="opt">
                <ul>
                    {Currentquestion.options.map((options,i)=>{
                        return <li onClick={()=>selectOption(i)}>{options}</li>
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

export default Quizcss;