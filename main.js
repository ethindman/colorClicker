//Gets a random color
function random_color()
{
	var rgb = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	color = '#'  //this is what we'll return!
	for(var i = 0; i < 6; i++) 
	{
		x = Math.floor((Math.random()*16))
		color += rgb[x];	
	};
	return color;
}

//Resets colors of all boxes
function resetColors() {
	$('.large_box').css('background-color', '#ADD8E6');
	$('.large_box').children().css('background-color', '#0000FF');
}

$(document).ready(function(){
	
	//Changes color of all boxes on click of largest box
	$(document).on('click', '.large_box', function(){
		for (i=0;i<=3;i++) {
			$('#box'+i+'').css('background', random_color());
		}		
	});

	//Changes colors of side-box's sibling when clicked
	$('.side_box').click(function(event){
		event.stopPropagation();	
		$(this).siblings().css('background', random_color());
	});

	//Changes color of side-boxes' color when middle is clickec
	$('.middle_box').click(function(event){
		event.stopPropagation();
		$('#box0').css('background', random_color());
	});
});