/**
 * Created by Andrej on 19.9.2014..
 */
(function (api) {
    var data = require("../data");

    var responseHandler=function(response){
        return function(err, results) {
            if (err) {
                response.send(400, err);
            } else {
                response.set("Content-Type", "application/json");
                response.send(results);
            }
        }
    }

    api.init = function (app) {
        app.get("/api/subcategories/:categoryName", function (req, res) {
            data.getSubCategories(req.params.categoryName, responseHandler(res))
        });

        app.get("/api/categories/", function (req, res) {
            data.getCategories(responseHandler(res));
        });
    }

})(module.exports);