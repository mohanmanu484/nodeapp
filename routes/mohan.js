var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   // res.header(200, {"Content-Type": "application/json"});
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
    });
    res.send(otherObject)

});

/*function random(response) {
    console.log("Request handler random was called.");
    response.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
        anArray: otherArray,
        another: "item"
    });
    response.end(json);
}*/

module.exports = router;