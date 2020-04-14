

function myFunction(elem) {
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
}
 
  