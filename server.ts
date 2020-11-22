`use strict`

const express = require(`express`);

const PORT = 3000;
const HOST = `127.0.0.1`;
const app = express();

var auth = require (`./auth_router.ts`);

app.use(`/auth`, auth);

app.get(`/`, (req, res) => {
    res.send(`Hello World`);
});

//app.listen(PORT, HOST);
app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
