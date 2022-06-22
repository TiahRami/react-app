const Course = ( {course} ) => {
  return(
    <div>
      <h1> {course.name} </h1>
      <ul>
        {course.parts.map( part => 
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
          )}
      </ul>
    </div>
  )
}

const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewars",
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const total = course.parts.reduce((acc, c) => acc + c.exercises,0)

  return (
    <div>
      <Course course={course} />
      <h3>total of {total} exercices</h3>
    </div>
  )
} 

export default App;
