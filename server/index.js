const express = require('express');
const app = express();
const Router = express.Router();

app.use('/', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write('<script>alert("反射型 XSS 攻击")</script>');
    res.end();
});

app.listen(8888);