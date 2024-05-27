const mongoose = require("mongoose")
    mongoose.connect("mongodb+srv://Bookstore:Rathor9510@cluster0.s4wjjnk.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Database connected"));


