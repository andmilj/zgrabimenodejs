/**
 * Created by Andrej on 16.9.2014..
 */
(function (homeController) {
    var data=require("../data");

    homeController.init = function (app) {

        app.get("/", function (req, res) {
            data.getCategories(function(err, result){
                res.render("index", { title: 'Express', categories:result });
            });

        });

    };
})(module.exports)