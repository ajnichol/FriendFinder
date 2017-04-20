var friendsArray = require("../data/friends.js");


module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendsArray);
	});

	app.post("/api/friends", function(req, res){
		friendsArray.push(req.body);
		res.json(friendsArray);

		for(var i=0; i < friendsArray.length; i++){
			var eachScore = friendsArray[i].scores;
			var friendScore = eachScore.map(function(num){
				var eachNum = parseInt(num, 10);
				console.log(eachNum);
			});
		};
	});
};