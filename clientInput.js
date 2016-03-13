//def of request object
{
	"name" : "request",
	"type" : "object",
	"properties" : {
		"location" : {"type" : "string"},
		"dates" : {"type" : "string"},
		"brand" : {"type" : "string"},
		"description" : {"type" : "string"},
		"graph_style" : {"type" : "string"},
		"teams" : {
			"type" : "array",
			"items" : {
				"type" : "string"
			}
		},
		"recipients" : {
			"type" : "array",
			"items" : {
				"type" : "string"
			}
		}
	}
}

function convertFormToJSON() {
	var graph_styleField = document.getElementById("chartTypes");
	var tagsSelField = document.getElementById("tagsSel")
	return {
		"location" : document.getElementById("location")[0].value,
		"dates" : document.getElementById("startDate")[0].value+" - "+document.getElementById("endDate")[0].value,
		"brand" : tagsSelField.options[tagsSelField.selectedIndex].value,
		"description" : document.getElementByClassName("requestField")[0].value
		"graph_style" : graph_styleField.options[graph_styleField.selectedIndex].value,
		"teams": document.getElementByClassName("teamField")[0].value.split(","),
		"recipients" : document.getElementById("sendToField").value.split(", ")
	};
}