const router = require("express").Router();
const bookModel = require("../models/booksModel");

//Post request
router.post("/add",async(req,res)=>{
   try{
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({message: "Book added successfully"});

});

 } catch(error){
    console.log(error);
    res.status(500).json({message:"book not added"});
   }
});


//get request
router.get("/getBooks", async (req,res) => {

   let books;
   try {
      books = await bookModel.find();
      res.status(200).json({books});
   } catch (error) {
      console.log(error);
      res.status(500).json({message:"cannot get books"});
   }
});

//get request by ID
router.get("/getBooks/:id", async (req,res)=>{
   let book;
   const id = req.params.id;
   try {
      book = await bookModel.findById(id);
      res.status(200).json({book});
   } catch (error) {
      console.log(error);
      res.status(500).json({message: "error retrieving book"});
   }
});

//update book by ID

router.put("/updateBook/:id", async (req, res)=>{

const id = req.params.id;
const {bookname,description,author,image,price} = req.body;
 let book;
try {
   book = await bookModel.findByIdAndUpdate(id,{
      bookname,
      description,
      author,
      image,
      price
   });

   await book.save().then(()=>
      res.status(200).json({message: "Book updated successfully"}));


}
catch (error) {
   console.log(error);
   res.status(500).json({message: "unable to update book"});
}

});

//DELETE BOOK BY ID
router.delete("/deleteBook/:id", async(req,res)=>{
   const id = req.params.id;
   try {
      
      await bookModel.findByIdAndDelete(id).then(()=>
         res.status(201).json({message:"Deleted Successfully"}));

   } catch (error) {
      console.log(error);
      res.status(500).json({message: "could not delete book"})
   }
});


module.exports = router;
