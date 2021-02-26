const express = require('express');
const path = require('path');
const port = 6500;
const app = express();

// use middleware to get assist functions
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname,"/node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist/")));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);

})