var friendsArray = require("../data/friends.js");


module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendsArray);
	});

	app.post("/api/friends", function(req, res){
		var newScoresArray = [];
		var newScores = req.body.scores;
		var numScore = newScores.map(function(numbers){
			var friendNum = parseInt(numbers);
			newScoresArray.push(friendNum);
		});
		// ******friendsArray.push(req.body);*************
		
		for(var i = 0; i < friendsArray.length; i++){
			var newArray = [];
			var eachScore = friendsArray[i].scores;
			console.log("! " + eachScore);
			var friendScore = eachScore.map(function(num){
				var eachNum = parseInt(num);
				newArray.push(eachNum);
			});
		};
		console.log(newArray);
		console.log(newScoresArray);
		function calculations(){
			var diff1 = Math.abs(newArray[0] - newScoresArray[0]);
			var diff2 = Math.abs(newArray[1] - newScoresArray[1]);
			var diff3 = Math.abs(newArray[2] - newScoresArray[2]);
			var diff4 = Math.abs(newArray[3] - newScoresArray[3]);
			var diff5 = Math.abs(newArray[4] - newScoresArray[4]);
			var diff6 = Math.abs(newArray[5] - newScoresArray[5]);
			var diff7 = Math.abs(newArray[6] - newScoresArray[6]);
			var diff8 = Math.abs(newArray[7] - newScoresArray[7]);
			var diff9 = Math.abs(newArray[8] - newScoresArray[8]);
			var diff10 = Math.abs(newArray[9] - newScoresArray[9]);
			var totalDifference = diff1+diff2+diff3+diff4+diff5+diff6+diff7+diff8+diff9+diff10;
			console.log(totalDifference);
			friendsArray.push(req.body);
		};
		calculations();
	});
};