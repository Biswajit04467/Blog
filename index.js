const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

// importing routes 
const blogRoute = require("./routes/blogRoutes");
app.use("/api/v1", blogRoute);

const {dummyLike} = require("./controllers/likeController");
app.use("/abc/dummyController", dummyLike);

// start server 
app.listen(process.env.PORT, () => {
    console.log("server started at port-" + process.env.PORT);
})

const dbConnect = require("./config/datBase");
dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>Hello</h1>`)
});