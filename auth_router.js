`use strict`

const bodyParser = require(`body-parser`);

var loginController = require (`./auth_controller`);
var express = require(`express`);
var router =  express.Router();

const app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post(`/login`, urlencodedParser, (req, res) => {
    //take data from req and call auth controller? and respond here?
    console.log('Got body:', req.body);
    var body = req.body;
    var tmp = loginController.login(`nick`, `pw`);
    res.send(`Auth main`);
});

module.exports = router;