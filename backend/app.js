const express = require ("express")
const app = express()
const bookRoute = require("./routes/booksRoutes");
require("./connection/connect");
app.use(express.json());
const port = process.env.PORT || 4000


app.use("/api",bookRoute);


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})