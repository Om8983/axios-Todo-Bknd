const express = require('express')
const { router } = require('./routes/todo')
const PORT = 3000;

const app = express();
// for parsing json data 
app.use(express.json())

// routes
app.use("/app", router)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
})