const express = require('express');

const router = express.Router();

router.get('/member/login', (req, res) => {
    if(req.session.isLoggedin) {
        return res.redirect('/');
    };
    return res.render('login')
});

router.post('/member/login', (req, res) => {
    if (req.session.isLoggedin) {
        return res.redirect('/');
    };
    const { email, password } = req.body;
    req.session.isLoggedin = true;
    req.session.email = email;
    req.session.username = 'John Doe';
    return res.redirect('/');
});

router.get('/member/logout', (req, res) => {
    if (!req.session.isLoggedin) {
        return res.redirect('/');
    };
    return res.render('logout');
});

router.post('/member/logout', (req, res) => {
    if (!req.session.isLoggedin) {
        return res.redirect('/');
    };
    req.session.destroy();
    return res.redirect('/');
});

module.exports = router;