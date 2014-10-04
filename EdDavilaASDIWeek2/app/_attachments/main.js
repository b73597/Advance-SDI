$(document).ready(function() {
	console.log("I am working");
		$.ajax({
			"url": "_view/programs",
			"dataType": "json",
			"success": function(data) {
				console.log(data);
					$.each(data.rows, function(index, program){
						console.log(value);
						var acronym = program.value.acronym;
						var title = program.value.title;
						var months = program.value.months;
					});
			}
		});
});