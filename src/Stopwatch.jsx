import React from "react"
import { useState, useEffect } from "react"



export const Stopwatch =() =>{
   let [timeInSec, setTime] = useState(0);
   const [timerOn, setTimerOn] = useState(false);
    

const startTime=() =>{
    setTimerOn((timerOn)=> !timerOn)
    
}

const formatTime = (sec) =>{
    const min = Math.floor(sec/60);
    const remainingSec = sec %60;
    return `${min}:${remainingSec < 10 ? "0" : ""}${remainingSec}`
}
const resetTime=() =>{
 setTime(0)
 setTimerOn(false)
}
useEffect(()=>{
    let myTimer;
  if(timerOn){
    myTimer =  setInterval(() => {
        setTime((timeInSec) => timeInSec +1)
    }, 100);
  }else{
    clearInterval(myTimer)
  }
    return ()=> clearInterval(myTimer);

},[timerOn])

useEffect(()=>{

},[timerOn])

    return (
        <>
        <div className="border" style={{
            border:"solid 1px black"
        }}>
        <h1>Stopwatch</h1>

        <h3>Time:{formatTime (timeInSec)}</h3>
        
        <button onClick={startTime}>{timerOn ? 'Stop' : 'Start'}</button>
        <button onClick={resetTime}>Reset</button>
       </div> 
       </>
    )
}


 