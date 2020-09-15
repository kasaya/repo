import React from 'react';
import Course from './components/Course'
const App=({courses})=> courses.map(course=> <Course key={course.id} course={course}/>)

export default App