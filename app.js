const tasks = require("./routes/tasks");
const express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api", tasks);
const port = 3000;

app.listen(port, () => console.log(`Listening on Port ${port}...`));
