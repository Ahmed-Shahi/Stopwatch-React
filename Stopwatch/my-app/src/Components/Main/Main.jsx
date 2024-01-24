import React, { useRef, useState } from 'react'

export default function Main() {
    let [Time,setTime] = useState(0)
    let interval = useRef(null)
    let [Now,setNow] = useState(null)
    let resetref = useRef(null)
    let startref = useRef(null)
    
    function Start (){
        setTime(Date.now())
        setNow(Date.now())
        finalTime = Time-Now;
        interval.current = setInterval(() => {
            setTime(Date.now())
        },10);
        resetref.current.style.display='none'
        startref.current.style.display='none'

    }
    function Stop (){
        clearInterval(interval.current)
        resetref.current.style.display='inline-block'
        startref.current.style.display='none'
        
    }
    function reset(){
        startref.current.style.display='inline-block'
        
        setTime(0)
        setNow(0)
    }
    let finalTime = (Time-Now) / 1000;
    
    return (
    <div>
        <h1>STOPWATCH</h1>
        <h1 className=''>{finalTime.toFixed(1)}</h1>
        <br />
        <button ref={startref} onClick={Start} className='btn'>START</button>
        <button onClick={Stop} className='btn'>STOP</button>
        <button ref={resetref} className='btn' onClick={reset}>RESET</button>
    </div>
  )
}
