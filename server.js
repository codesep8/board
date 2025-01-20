const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const compression = require("compression");
const session = require('express-session');

//app settings
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);
app.use(compression());
app.use(express.urlencoded({ extended: false} ));
app.use(express.json());
app.use(express.json({limit: '10mb'}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

//router
const boardRouter = require('./router/board');
const authRouter = require('./router/auth');

app.use('/', boardRouter);
app.use('/', authRouter);

app.get('/', (req, res) => {
    return res.render('index')
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log("http://localhost:3000")
});