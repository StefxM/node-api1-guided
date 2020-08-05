const http = require("http")
//we can use 'req' to get info about the incoming http request
// we can use 'res' to set info on the outgoing http response
const server = http.createServer((req, res) => {
    // assume this is a successful response
    res.statusCode = 200
    //tell the client what type of data we're sending back
    res.setHeader("Content-Type", "text/html")
    //send the actual data back
    res.write("<h1>hello, world</h1>")
    //finalize the response and send it off into the internet
    res.end()
})

server.listen(8080, () => {
    console.log("Server started on port 8080")
})