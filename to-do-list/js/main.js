//create to do list
//Add to do to the list
//Remove an individual item
//Remove all to dos from list- clear
//Keep a running total of how many to dos in list

//Need a form, input, buttons
//Create ids
//Get value for form
//Append the value (list items) to the dom

var i = 0;
$(document).ready(function(){

	$("#add").on("click",function(){

		var toDo = $("input").val()
		//Append list items grab value from input
		//i is changing so is the id of li, ensuring each entry creates a unique id
		$("ul").append("<li id=" + i + " onClick = hideListItem(" + i + ")>"+toDo+"</li>")
		// $("ul").on("<li>"+toDo+"</li>")
		//on to the li
		//items can be removed
		i++;
		$("p").text(i);
		console.log(i);

	});

	$("#delete").on("click", function(){
		$("ul").empty()
		i=0;
		$("p").text(i);
	});

	//button to clear (hide) all items
});
function hideListItem(myItem) {
	var x = document.getElementById(myItem);

	x.style.display = "none";
	i--;
	$("p").text(i);
	console.log(i);
};
