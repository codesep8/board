const express = require('express');

const router = express.Router();

router.get('/board', (req, res) => {
    return res.render('boardlist')
});

router.get('/board/:boardid', (req, res) => {
    const boardid = req.params.boardid;
    const data = {
        boardid: boardid,
    }
    return res.render('board', data);
});

router.get('/board/:boardid/:articleid', (req, res) => {
    const boardid = req.params.boardid;
    const articleid = req.params.articleid;
    const data = {
        boardid: boardid,
        articleid: articleid,
    }
    return res.render('article', data);
});

module.exports = router;