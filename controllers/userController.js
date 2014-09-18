/**
 * Created by Andrej on 16.9.2014..
 */
(function(userController){
    userController.init=function(app){
        app.get("/users/", function(req, res){
            res.send('respond with a resource');
        })
    }

})(module.exports)