

/* Tällä tiedostolla laitetaan serveri pystyyn */

const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend","index.html")); /* Käsketään, että mitä tahansa reittiä käytetään niin päädytään index.html sivulle. */
});

app.listen(process.env.PORT ||3009, () => console.log("Server running..."));

