const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const compression = require("compression");
const helmet = require("helmet");

const app = express();
app.use('view engine', 'ejs');
app.use(expressLayouts);
app.use(compression());
app.use(helmet());

app.listen(3000, () => {
    console.log("http://localhost:3000")
});