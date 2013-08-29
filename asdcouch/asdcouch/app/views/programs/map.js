function (doc) {
	if (doc._id.substr(0,4) === "json") {
		emit(doc._id, {
			"fname": doc.fname,
			"lname": doc.fname,
			"eMail": doc.eMail,
			"skill": doc.skill,
			"notes": doc.notes
		
		});
	};

};