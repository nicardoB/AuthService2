`use strict`
//run from vscode to debug. Fix unit tests!
const bodyParser = require(`body-parser`);

var loginController = require (`./auth_controller`);
var expresss = require(`express`); //how do i use this without changing the variable name?? TS gives me an error
var router =  expresss.Router(); 

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post(`/login`, urlencodedParser, (req, res) => {
    //take data from req and call auth controller? and respond here?
    console.log('Got body:', req.body);
    var body = req.body;
    var response = loginController.login(`nick`, `pw`);
    res.send(`Auth main`);
});

module.exports = router;