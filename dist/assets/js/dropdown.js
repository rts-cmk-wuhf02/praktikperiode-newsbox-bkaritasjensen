"use strict";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
} // Close the dropdown if the user clicks outside of it


window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    console.log(e);
    var myDropdown = document.getElementById("myDropdown");

    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};
/* function myFunction(elem) {
	var x = document.getElementById("myDropdown");
	var description = document.getElementsByClassName("article");
	x.innerHTML = description;
	
	var button = document.getElementsByClassName("dropbtn");
	if(elem.classList.contains("show")){
		elem.classList.remove("show");
		for (var i = 0; i < button.length; i++) {
	}
			button[i].classList.remove('show');
		}
	elem.classList.add('show');
} */