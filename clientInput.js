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
	
}