/**
 * Created by Andrej on 18.9.2014..
 */
(function(database){

    var mongodb=require("mongodb");
    var mongoURL="mongodb://localhost:27017/zgrabime";
    var theDb=null;

    database.getDb=function(next){
        if(!theDb){
            mongodb.MongoClient.connect(mongoURL, function(err,db){
                if(err){
                    next(err, null);
                }else{
                    theDb={
                        db:db,
                        categories:db.collection("categories")
                    };
                    next(null, theDb);
                }
            })
        }else{
            next(null, theDb);
        }
    };

})(module.exports)
