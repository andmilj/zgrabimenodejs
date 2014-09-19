/**
 * Created by Andrej on 16.9.2014..
 */
(function(controllers){
    var homeController=require("./homeController");
    var userController=require("./userController");
    var apiController=require("./apiController");

    controllers.init=function(app){
       homeController.init(app);
       userController.init(app);
       apiController.init(app);
    };

})(module.exports);