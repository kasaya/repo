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
      <Content 
       part1={part1}  exercises1={exercises1}
       part2={part2}  exercises2={exercises2} 
       part3={part3}  exercises3={exercises3}>
       </Content>
      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>

  )
}



const Header = (props)=>(
  <h1>{props.course}</h1>
)
const Content = (content)=>{
  return (
    <>
      <Part part={content.part1}  exercises={content.exercises1}></Part>
      <Part part={content.part2}  exercises={content.exercises2}></Part>
      <Part part={content.part3}  exercises={content.exercises3}></Part>
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