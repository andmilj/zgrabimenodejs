/**
 * Created by Andrej on 18.9.2014..
 */
(function (data) {
    var database = require("./database");

    var categories = [
        { _id: "Alkoholna pića", ancestors: [ ], parent: null },
        { _id: "Bezalkoholna pića", ancestors: [ ], parent: null },
        { _id: "Jaka alkoholna pića", ancestors: [ "Alkoholna pića"], parent: "Alkoholna pića" },
        { _id: "Sokovi", ancestors: [ "Bezalkoholna pića"], parent: "Bezalkoholna pića" },
        { _id: "Whiskey", ancestors: ["Alkoholna pića", "Jaka alkoholna pića" ], parent: "Jaka alkoholna pića" },
        { _id: "Gazirana", ancestors: ["Bezalkoholna pića", "Sokovi" ], parent: "Sokovi" }
    ]

    data.getCategories = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.categories.find({parent: null}).toArray(function (err, results) {
                    next(null, results);
                });
            }
        });
    }

    data.getSubCategories = function (categoryName, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.categories.find({parent: categoryName}).toArray(function (err, results) {
                    next(null, results);
                })
            }
        });
    }

    function seedData() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("error" + err);
            } else {
                db.categories.count(function (err, count) {
                    if (err) {
                        console.log("failed to receive database count")
                    } else {
                        if (count == 0) {
                            console.log("seeding database");
                            categories.forEach(function (item) {
                                db.categories.insert(item, function (err) {
                                    if (err) {
                                        console.log("failed insert");
                                    }
                                })
                            });
                        } else {
                            console.log("data already existing")
                        }
                    }
                });
            }
        });
    }

    seedData();
})(module.exports)