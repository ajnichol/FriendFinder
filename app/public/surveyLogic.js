$("#formSubmit").on("click", function(){

	var formValidation = function(){

		var validation = true;
		if($("#name").val() === ""){
			validation = false;
		};

		if($("#photo").val() === ""){
			validation = false;
		};

		$(".chosen-select").each(function(){
			if ($(this).val() === ""){
				validation = false;
			};
		});

		return validation;
	};

	if(formValidation() == true){

		var newFriend = {
			name: $("#name").val().trim(),
			photo: $("#photo").val().trim(),
			scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
		};

		var currentURL = window.location.origin;

		$.post(currentURL + "/api/friends/", newFriend, function(data){
			
		});
	}else{
		alert("Please fill out all the information.");
	};

	return false;
});