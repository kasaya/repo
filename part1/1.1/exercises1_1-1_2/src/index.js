import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)

  const goodClick = () =>{
     setGood(good + 1)
     setAll(all+1)
     setScore(score+1)
  }
  const neutralClick = () =>{
    setNeutral(neutral + 1)
    setAll(all+1)
  }
  const badClick = () =>{
    setBad(bad + 1)
    setAll(all+1)
    setScore(score-1)
  }

  const handleclick= (prop)=>{
    return () => prop()
  }


  const Button = (prop) =>{
    return (
    <button onClick={prop.funciton}>{prop.text}</button>
    )
  }

  const Display = () => {
    return (
      <div>
        good {good}<br/>
        neutral {neutral}<br/>
        bad {bad}
      </div>
    )
  }
  const All = () => {
    return (
      <div>
        all {all}
      </div>
    )
  }
  const Average = () => {
    if(all != 0){
      return (
        <div>
          average {score / all}
        </div>
      )
    }

    return (
      <div>
        average 0
      </div>
    )
    
  }
  const Positive = () => {
    if(all != 0){
      return (
        <div>
          positive {(good/all) * 100}%
        </div>
      )
    }

    return (
      <div>
        positive 0%
      </div>
    )
    
  }
  

  return (
    <div>
      <h1>give feedback</h1>
     <Button text="good" funciton={goodClick}></Button>
     <Button text="neutral" funciton={neutralClick} ></Button>
     <Button text="bad" funciton={badClick}></Button>
     <h1>statistics</h1> 
     <Display></Display>
     <All></All>
     <Average></Average>
     <Positive></Positive>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)