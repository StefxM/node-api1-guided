//this is pulling the dependency from 'node modules' now, instead of the stdlib
 const express = require("express")
 //using "./" imports a local file rather than a third party dependancy
const db = require("./database")
//creates a new express server 
const server = express()
//installing some middleware that helps us parse JSON request bodies, (will go indepth explanation later) 
server.use(express.json())

server.get("/", (req, res) => {
    res.json({message: "hello, world"})
})

server.get("/users", (req,res) => {
    //gets a list of users from our "fake" database
    const users = db.getUsers()

    res.json(users)

})

server.get("/users/:id", (req, res) => {
    //the param variable matches up to the name of our URL param above
    const id = req.params.id
    // get a specific user by their ID from the "fake database"
    const user = db.getUserById(id)
  //make sure the system doesnt break if someone calls the endpoints with a user ID that doesnt exist
    if (user) {
        res.json(user)//send back to the response
    } else {
        res.status(404).json({message: "user not found"})
    }
    
})

server.post("/users", (req, res) => {
    const newUser=db.createUser({
        name: req.body.name,
    })
    res.status(201).json(newUser)
})

server.delete("/users/:id", (req, res) => {
    const user= db.getUserById(req.params.id)
    if (user) {
    db.deleteUser(req.params.id)
    
    //since theres nothing to return back to the client send a 204 with an empty response, 204 just means "success but we have nothing to return" 
    res.status(204).end()
    } else {
        res.status(404).json({
            message: "User not found",
        })
    }
    
})

server.listen(8080, () => {
    console.log("server started on port 8080")
})