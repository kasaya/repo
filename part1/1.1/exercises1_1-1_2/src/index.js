import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return(
    <>
      <button onClick={props.click}>{props.text}</button>
    </>
  )
}
const DisplayContent = (props) => {
  return(
    <>
      {props.anecdotes[props.index]} <br/>
      has {props.point[props.index]} votes
    </>
  )
}


const App = (props) => {

  const [selected, setSelected] = useState(0)
  const[point, setPoint] = useState(props.points)
  const clickfunction = () => {
    let num = Math.floor(Math.random() * (anecdotes.length-1)+1)
    setSelected(num)
  }

  const vote = () => {
    const copy = {...point}
    copy[selected] += 1
    setPoint(copy)
  }

  const most = ()=>{
    let most = point[0]
    let maxindex = 0
    for(let index in point) {  
      if(point[index] > most) {
        maxindex = index
        most = point[index]
      }
    }
    return maxindex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayContent anecdotes={props.anecdotes} point={point} index={selected} ></DisplayContent>
      <div>
        <Button click={vote} text= "vote"></Button>
        <Button click={clickfunction} text = "next anecdote"></Button>
      </div>
      <h1>Anecdote with most votes</h1>
      <DisplayContent anecdotes={props.anecdotes} point={point} index={most()} ></DisplayContent>
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const points=[0]
for(let index in anecdotes) {  
  points.push(0)
}

ReactDOM.render(
  <App anecdotes={anecdotes} points={points}/>,
  document.getElementById('root')
)