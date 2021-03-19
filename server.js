const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.redirect('/index.html')
})

app.listen(PORT, function () {
    console.log(`Serving content on http://localhost:${PORT}`);
});