# Coding Dojo's ColorClicker!

This color clicker was built with increased functionality.

Clicking the largest box will cause all the boxes to get assigned a new random color.

This was accomplished with respect to the DIY principle, using the following for-loop in my jQuery file:

$(document).on('click', '.large_box', function(){
	for (i=0;i<=3;i++) {
		$('#box'+i+'').css('background', random_color());
	}		
});

Each of the boxes on the page were given an id of box$. The for loop generates a number from 0 to 3, and inserts that into the selector dynamically, allowing the function to work for each of the boxes without having to create 4 selectors and repeating a ton of code.
