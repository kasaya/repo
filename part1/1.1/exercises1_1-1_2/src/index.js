import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (prop) =>{
  return (
  <button onClick={prop.funciton}>{prop.text}</button>
  )
}

const Statistic =(prop)=>{
  return(
    <>
    <tr>
      <td>{prop.text}</td> 
      <td>{prop.value}</td>
    </tr>
    </>
  )
}

const Statistics = (props) => {
  if(props.feedback.all > 0){

    return (
      <table>
        <tbody>
      <Statistic text="good" value={props.feedback.good}></Statistic>
      <Statistic text="neutral" value={props.feedback.neutral}></Statistic>
      <Statistic text="bad" value={props.feedback.bad}></Statistic>
      <Statistic text="all" value={props.feedback.all}></Statistic>
      <Statistic text="average" value={props.feedback.score / props.feedback.all}></Statistic>
      <Statistic text="positive" value={((props.feedback.good/props.feedback.all) * 100).toString().concat('%')}></Statistic>
        </tbody>
      </table>
    )
  }
  return (
    <>
     No feedback given
    </>
  )
  
}




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

  

  
  return (
    <div>
     <h1>give feedback</h1>
     <Button text="good" funciton={goodClick}></Button>
     <Button text="neutral" funciton={neutralClick} ></Button>
     <Button text="bad" funciton={badClick}></Button>
     <h1>statistics</h1> 
     <Statistics feedback={{good,neutral,bad,all,score}}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)