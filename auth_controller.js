`use strict`

module.exports = {
    login:(un, pw) => {
        if (un && pw && un === `username` && pw === `1234`){
            return true;
        }
        return false; //return a 401
    }
};