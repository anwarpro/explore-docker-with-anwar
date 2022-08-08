const express = require("express");
const app = express();
const PORT = 4002;
app.get('/', (req, res) => {
    res.send("Hello World V2");
});
app.listen(PORT, () => console.log("Server is listening to port " + PORT));