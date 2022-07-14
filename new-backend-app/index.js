const express = require("express")
const app = express()

app.use(express.json())



let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

//------------------------ Get Method ------------------------

app.get("/", (request, response) => {
  response.send("<h1>Welcome!</h1>")
})

app.get("/api/persons", (request, response) => {
  response.json(persons)
})

app.get("/info", (request, response) => {
  const date = new Date().toLocaleString()  
  response.send(`Phonebook has info for ${persons.length} peoples <br> ${date}`)
})

app.get("/api/persons/:id", (request, response) => {
  let id = Number(request.params.id)
  let person = persons.find(person => person.id === id)

  if(person) {
    response.json(person)
  } else {
    response.status(400).end()
  }
})


//------------------------ Delete Method ------------------------

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

//------------------------ Post Method ------------------------

const generateId = () => {
  let newId = Math.random() * 500
  console.log(newId)
  return newId
}

app.post("/api/persons", (request, response) => {
  const body = request.body
  const nameAlreadyThere = persons.find(person => person.name === body.name)

  if(nameAlreadyThere) {
    return response.status(400).json({
      error: "name must be unique"
    })
  }
  if(!body.name || !body.number ) {
    return response.status(400).json({
      error: "name or/and number missing"
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})
