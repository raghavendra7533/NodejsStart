const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/process-form", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // Perform validation on the server-side as well
    if (name && email && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        res.send("Form submitted successfully!");
        console.log(name, email)
    } else {
        res.status(400).send("Invalid form data");
    }
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})