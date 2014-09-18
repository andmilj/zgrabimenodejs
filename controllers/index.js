/**
 * Created by Andrej on 16.9.2014..
 */
(function(controllers){
    var homeController=require("./homeController");
    var userController=require("./userController");

    controllers.init=function(app){
       homeController.init(app);
       userController.init(app);
    };

})(module.exports);