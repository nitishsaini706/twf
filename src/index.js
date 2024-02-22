const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes/index");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(routes);

app.get("/",async(req,res)=>{
    res.json("server running fine");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
