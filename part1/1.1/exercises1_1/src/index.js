import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      <Content part={part1}  exercises={exercises1}></Content>
      <Content part={part2}  exercises={exercises2}></Content>
      <Content part={part3}  exercises={exercises3}></Content>
      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>

  )
}


const Header = (props)=>(
  <h1>{props.course}</h1>
)
const Content = (content)=>(
  <p>
   {content.part} {content.exercises}
  </p>
)
const Total = (props)=>(
  <p>Number of exercises {props.total}</p>
)

ReactDOM.render(<App />, document.getElementById('root'))