import React from "react"

const Course = ( {course} ) => {
  return(
    <div>
      <h2> {course.name} </h2>
      <ul>
        {course.parts.map( part => 
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
          )}
      </ul>
      <h3>
        total of {course.parts.reduce((acc, c) => acc + c.exercises,0)} exercices
      </h3>
    </div>
  )
}

export default Course