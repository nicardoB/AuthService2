`use strict`

//HOW DO I USE THIS AS A SEPARATE FILE??
interface NetworkResponse {
    responseCode : number,
    responseBody : String     
 }

module.exports = {
    //try enforcing that it returns a boolean
    login:(un, pw) : NetworkResponse => {
        if (un && pw && un === `username` && pw === `1234`){
            var response : NetworkResponse = {
                responseCode : 200,
                responseBody : `Success`
            };
            return response;
        }
        var response : NetworkResponse = {
            responseCode : 401,
            responseBody : `Unauthorized`
        };
        return response;
    }
};