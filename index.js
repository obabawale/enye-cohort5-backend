const express = require("express");
const cors = require("cors");
const route = require('./routes/route');

// initialize app
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

//testing server
app.get('/', (req, res) => res.send("Serve is up and running...."));

app.use('/api', route);

app.listen(port, () => {
    console.log("Server started at port " + port);
});