import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total total={part1.exercises + part2.exercises + part3.exercises}></Total>
    </div>

  )
}



const Header = (props)=>(
  <h1>{props.course}</h1>
)
const Content = (props)=>{
  return (
    <>
    <Part part={props.part1.name}  exercises={props.part1.exercises}></Part>
    <Part part={props.part2.name}  exercises={props.part2.exercises}></Part>
    <Part part={props.part3.name}  exercises={props.part3.exercises}></Part>
    </>
  )
}
const Part = (part)=>(
  <p>{part.part} {part.exercises}</p>
)

const Total = (props)=>(
  <p>Number of exercises {props.total}</p>
)

ReactDOM.render(<App />, document.getElementById('root'))