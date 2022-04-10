/*dpendencies*/
const express = require("express");
const app = express();
const port = 3030;
const path = require("path");

/*midelewares*/
app.use(express.static("public"))

/*server*/
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`))

/*rutes*/
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, `views`, `home.html`))
});






/*
app.get(`/`, (req,res) => {
    res.sendFile(path.join(__dirname, `./views/home.html`))
});

app.get(`/about`, (req,res) => {
    res.sendFile(path.join(__dirname, `./views/about.html`))
});

app.get(`/about`, (req,res) => {
    res.sendFile(path.join(__dirname, `./views/about.html`))
});*/