import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts} ></Content>
      <Total parts={parts} ></Total>
    </div>

  )
}



const Header = (props)=>(
  <h1>{props.course}</h1>
)
const Content = (props)=>{
  return (
    <>
    <Part part={props.parts[0].name}  exercises={props.parts[0].exercises}></Part>
    <Part part={props.parts[1].name}  exercises={props.parts[1].exercises}></Part>
    <Part part={props.parts[2].name}  exercises={props.parts[2].exercises}></Part>
    </>
  )
}
const Part = (part)=>(
  <p>{part.part} {part.exercises}</p>
)

const Total = (props)=>(
  <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
)

ReactDOM.render(<App />, document.getElementById('root'))