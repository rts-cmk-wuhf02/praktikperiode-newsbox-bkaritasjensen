function myFunction() {
	document.getElementById("button1").classList.toggle("show");
}
  // Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
		console.log(e)
	var myDropdown = document.getElementById("button1");
	  if (myDropdown.classList.contains('show')) {
		myDropdown.classList.remove('show');
	  }
	}
}



 
  