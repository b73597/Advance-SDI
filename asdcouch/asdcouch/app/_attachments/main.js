$(document).ready(function() {
	console.log("Hello World!");
		$.ajax({
			"url":"_view/sources",
			"dataType":"json",
			"success": function(data) {
				console.log(data);
					$.each(data.rows, function(index, sources) {
						console.log(sources);
							var fname = sources.value.fname;
							var lname = sources.value.lname;
							var eMail = sources.value.eMail;
							var skill = sources.value.skill;
							var notes = sources.value.notes;
							$("#programlist").append(
								$("<li>").text(fname)
							);
							
					});
			}
		});
	});