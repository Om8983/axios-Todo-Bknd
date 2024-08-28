const express = require('express')
const { router } = require('./routes/todo')
const PORT = 3000;
const cors = require('cors')

const app = express();
// for parsing json data 
app.use(express.json())

// cors 
app.use(cors());
// routes
app.use("/app", router)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
})
