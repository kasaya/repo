import React from 'react';
const Total = ({ course }) => {
    const total = course.parts.reduce((s,p) => s + p.exercises,0)
    return(
      <p>total of {total} exercises </p>
    ) 
  }
export default Total