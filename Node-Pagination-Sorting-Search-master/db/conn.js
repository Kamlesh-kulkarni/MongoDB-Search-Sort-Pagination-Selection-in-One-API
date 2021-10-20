const mongoose = require("mongoose");

const Db = 
"mongodb+srv://kk:kk123@cluster0.z9lfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(Db, {
    // userNewUrlParser: true,
    
    useUnifiedTopology: true,
   
})
.then(() =>{
    console.log("Connection Successfull");
})
.catch((e) => { 
    console.log(e);
});