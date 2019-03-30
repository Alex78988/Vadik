var count = 0;
$("#plus").click(function(event) {
	$("#result").text(++count);
});
$("#minus").click(function(event) {
	$("#result").text(--count);




// $("p").eq(1).addClass("black");
// $("p").eq(1).removeClass("black");
// $("p").toggleClass("black");
// $("p").click(function(event) {
// 	$("p").toggleClass("black");
// });

	



// var start = "<table>",
// 	end   = "</table>"
// 	result = ""
// for (var i = 1; i < 9; i++) {
// 	result += "<tr>"
// 		// result+=`<tr><td>${i}</td></tr>`
// 		for (var k = 1; k < 9; k++) {
// 				result += `<td>${i} ${k}</td>`
// 			}	
// 	result+= "</tr>"	
// 	}
// 	result = `${start}${result}${end}`	
// 	$("body").prepend(result);
