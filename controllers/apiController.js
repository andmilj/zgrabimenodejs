/**
 * Created by Andrej on 19.9.2014..
 */
(function(api){
    var data=require("../data");

    api.init=function(app){
        app.get("/api/subcategories/:categoryName", function(req, res){
            data.getSubCategories(req.params.categoryName, function(err, results){
                if(err){
                    res.send(400,err);
                }else{
                    res.set("Content-Type","application/json");
                    res.send(results);
                }
            })
        });
    }

})(module.exports);