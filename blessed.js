// Javascript file to deal with some parts of the website

	var slideIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("pictures");
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = "none"; 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	   // x[slideIndex-1].classList.add("activePic"); 
		x[slideIndex-1].style.display = "block";
		x[slideIndex-1].style.maxWidth = "70%";
		x[slideIndex-1].style.maxHeight = "70%";
		x[slideIndex-1].style.margin = "auto"; 
	    setTimeout(carousel, 3000); // Change image every 2 seconds
	}