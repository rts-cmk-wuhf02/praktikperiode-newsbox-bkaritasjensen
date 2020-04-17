document.addEventListener("DOMContentLoaded", () =>{
	(function(){
	
/**
 * This function coverts a DOM Tree into JavaScript Object. 
 * @param srcDOM: DOM Tree to be converted. 
 */

function xml2json(srcDOM){
	let children = [...srcDOM.children];

	//base case for recursion.
	if (!children.length){
		return srcDOM.innerHTML
	}

	//initialization object to be returned.
	let jsonResult = {};
	
	for (let child of children){
		//checking is child has siblings of same name.
		let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;

		//If child is array, save the values as array, else as string.
		if (childIsArray) {
			if (jsonResult[child.nodeName] === undefined){
				jsonResult[child.nodeName] = [xml2json(child)];
			}else {
				jsonResult[child.nodeName].push(xml2json(child));
			}
		}else{
			jsonResult[child.nodeName] = xml2json(child);
		}
	}
	return jsonResult;
}

/////////////////////////////////////////// HENTER DATA ///////////////////////////////////////////////////////////

const RSS_URL_HomePage = `https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml`;

fetch(RSS_URL_HomePage)
  .then(response => response.text())
  .then((data) => {
	  	const parser = new DOMParser(); // initialize dom parser
	  	const srcDOM = parser.parseFromString(data, "application/xml"); 
		const convertData = xml2json(srcDOM);
		return convertData;
	}).then (data =>{
		//console.log(data.rss.channel.title);
		const categoryTitle = data.rss.channel.title;
		const titleRemove = categoryTitle.slice(9);
		console.log(data.rss.channel)

		/////////////////// CATEGORY
		////// INDEX & ARCHIVE
		const categoriesTemplate = document.getElementById("template_categories");
		const categoriesCardList = document.getElementById("categories_cardList");
		const cloneCategories = categoriesTemplate.content.cloneNode(true); 
		///// SETTINGS
		const settingsTemplate = document.getElementById("template_settings");
		const settingsCardList = document.getElementById("settings_cardList");
		const cloneSettings = settingsTemplate.content.cloneNode(true); 

		////////////////////////////// SET DATA
		///// TITLE - INDEX, ARCHIVE 
		cloneCategories.querySelector(".setTitle").innerText = titleRemove;
		cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
		///// SETTINGS
		cloneSettings.querySelector(".categoryTitle").innerText = titleRemove;



		///////////////// BUTTON
		const button = cloneCategories.querySelector(".dropbtn");
		button.setAttribute("id", "button1");

		document.getElementById('button1').addEventListener('click', buttonClick1 );

			function buttonClick1 (){
				document.getElementById('buttonCategory').classList.toggle("show");
			}
			window.onclick = function (event) {
				if (!event.target.matches('.dropbtn')) {
					const dropdowns = document.getElementsByClassName('dropdown-content');
					const i;
					for (i = 0; i < dropdowns.length; i++) {
						const opDropdown = dropdowns[i];
						if (opDropdown.classList.contains('show')) {
							opDropdown.classList.remove('show');
						}
					}
				}
			}



		////////////////// ARTICLES
		const articleCardList = document.querySelector(".articles_cardList");
		const articleTemplate = document.getElementById("template_articles");
		const cloneArticles = articleTemplate.content.cloneNode(true);

		

		///////////////////////// CLONE
		categoriesCardList.appendChild(cloneCategories);
		articleCardList.appendChild(cloneArticles);
		settingsCardList.appendChild(cloneSettings);
	});


/////////////////////////////////////// HEALTH ////////////////////////////////////////
const RSS_URL_Health = `https://rss.nytimes.com/services/xml/rss/nyt/Health.xml`;

	fetch(RSS_URL_Health)
	  .then(response => response.text())
	  .then((data) => {
			  const parser = new DOMParser(); // initialize dom parser
			  const srcDOM = parser.parseFromString(data, "application/xml"); 
			const convertData = xml2json(srcDOM);
			return convertData;
		}).then (data =>{
			//console.log(data.rss.channel.title);
			const categoryTitle = data.rss.channel.title;
			const titleRemove = categoryTitle.slice(9);
			console.log(titleRemove)

			/////////////////// CATEGORY
			const categoriesTemplate = document.getElementById("template_categories");
			const categoriesCardList = document.getElementById("categories_cardList");
			const cloneCategories = categoriesTemplate.content.cloneNode(true); 


			///////////////// BUTTON
			const button = cloneCategories.querySelector(".dropbtn");
			button.setAttribute("id", "button2");

			////////////////// SET DATA
			cloneCategories.querySelector(".setTitle").innerText = titleRemove;
			cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;

			document.getElementById('button2').addEventListener('click', buttonClick2 );

			function buttonClick2 (){
				document.getElementById('buttonCategory').classList.toggle("show");
			}
			window.onclick = function (event) {
				if (!event.target.matches('.dropbtn')) {
					const dropdowns = document.getElementsByClassName('dropdown-content');
					const i;
					for (i = 0; i < dropdowns.length; i++) {
						const opDropdown = dropdowns[i];
						if (opDropdown.classList.contains('show')) {
							opDropdown.classList.remove('show');
						}
					}
				}
			}
			
			////////////////// ARTICLES
			const articleCardList = document.querySelector(".articles_cardList");
			const articleTemplate = document.getElementById("template_articles");
			const cloneArticles = articleTemplate.content.cloneNode(true);
			
			
	
			categoriesCardList.appendChild(cloneCategories);
			articleCardList.appendChild(cloneArticles);
		});

/////////////////////////////// BUSINESS //////////////////////////////////////////////////
const RSS_URL_Business = `https://rss.nytimes.com/services/xml/rss/nyt/Business.xml`;

	fetch(RSS_URL_Business)
	  .then(response => response.text())
	  .then((data) => {
			  const parser = new DOMParser(); // initialize dom parser
			  const srcDOM = parser.parseFromString(data, "application/xml"); 
			const convertData = xml2json(srcDOM);
			return convertData;
		}).then (data =>{
			//console.log(data.rss.channel.title);
			const categoryTitle = data.rss.channel.title;
			const titleRemove = categoryTitle.slice(9);
			console.log(titleRemove)

			/////////////////// CATEGORY
			const categoriesTemplate = document.getElementById("template_categories");
			const categoriesCardList = document.getElementById("categories_cardList");
			const cloneCategories = categoriesTemplate.content.cloneNode(true); 

			///////////////// BUTTON
			const button = cloneCategories.querySelector(".dropbtn");
			button.setAttribute("id", "button3");

			document.getElementById('button3').addEventListener('click', buttonClick3 );

			function buttonClick3 (){
				document.getElementById('buttonCategory').classList.toggle("show");
			}
			window.onclick = function (event) {
				if (!event.target.matches('.dropbtn')) {
					const dropdowns = document.getElementsByClassName('dropdown-content');
					const i;
					for (i = 0; i < dropdowns.length; i++) {
						const opDropdown = dropdowns[i];
						if (opDropdown.classList.contains('show')) {
							opDropdown.classList.remove('show');
						}
					}
				}
			}
			
			////////////////// ARTICLES
			const articleCardList = document.querySelector(".articles_cardList");
			const articleTemplate = document.getElementById("template_articles");
			const cloneArticles = articleTemplate.content.cloneNode(true);
			
			cloneCategories.querySelector(".title1").innerText = titleRemove;
			cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
	
			categoriesCardList.appendChild(cloneCategories);
			articleCardList.appendChild(cloneArticles);
		});

/////////////////////////////// SPORT //////////////////////////////////////////////////
const RSS_URL_Sport = `https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml`;

fetch(RSS_URL_Sport)
  .then(response => response.text())
  .then((data) => {
		  const parser = new DOMParser(); // initialize dom parser
		  const srcDOM = parser.parseFromString(data, "application/xml"); 
		const convertData = xml2json(srcDOM);
		return convertData;
	}).then (data =>{
		//console.log(data.rss.channel.title);
		const categoryTitle = data.rss.channel.title;
		const titleRemove = categoryTitle.slice(9);
		console.log(titleRemove)

			/////////////////// CATEGORY
			const categoriesTemplate = document.getElementById("template_categories");
			const categoriesCardList = document.getElementById("categories_cardList");
			const cloneCategories = categoriesTemplate.content.cloneNode(true); 

			///////////////// BUTTON
			const button = cloneCategories.querySelector(".dropbtn");
			button.setAttribute("id", "button4");

			document.getElementById('button4').addEventListener('click', buttonClick4 );

			function buttonClick4 (){
				document.getElementById('buttonCategory').classList.toggle("show");
			}
			window.onclick = function (event) {
				if (!event.target.matches('.dropbtn')) {
					const dropdowns = document.getElementsByClassName('dropdown-content');
					const i;
					for (i = 0; i < dropdowns.length; i++) {
						const opDropdown = dropdowns[i];
						if (opDropdown.classList.contains('show')) {
							opDropdown.classList.remove('show');
						}
					}
				}
			}
			
			////////////////// ARTICLES
			const articleCardList = document.querySelector(".articles_cardList");
			const articleTemplate = document.getElementById("template_articles");
			const cloneArticles = articleTemplate.content.cloneNode(true);
			
			cloneCategories.querySelector(".title1").innerText = titleRemove;
			cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
	
			categoriesCardList.appendChild(cloneCategories);
			articleCardList.appendChild(cloneArticles);
	});



/////////////////////////////// TECH //////////////////////////////////////////////////
const RSS_URL_Tech = `https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml`;

fetch(RSS_URL_Tech)
  .then(response => response.text())
  .then((data) => {
		  const parser = new DOMParser(); // initialize dom parser
		  const srcDOM = parser.parseFromString(data, "application/xml"); 
		const convertData = xml2json(srcDOM);
		return convertData;
	}).then (data =>{
		//console.log(data.rss.channel.title);
		const categoryTitle = data.rss.channel.title;
		const titleRemove = categoryTitle.slice(9);
		console.log(titleRemove)

			/////////////////// CATEGORY
			const categoriesTemplate = document.getElementById("template_categories");
			const categoriesCardList = document.getElementById("categories_cardList");
			const cloneCategories = categoriesTemplate.content.cloneNode(true); 

			///////////////// BUTTON
			const button = cloneCategories.querySelector(".dropbtn");
			button.setAttribute("id", "button5");

			document.getElementById('button5').addEventListener('click', buttonClick5 );

			function buttonClick5 (){
				document.getElementById('buttonCategory').classList.toggle("show");
			}
			window.onclick = function (event) {
				if (!event.target.matches('.dropbtn')) {
					const dropdowns = document.getElementsByClassName('dropdown-content');
					const i;
					for (i = 0; i < dropdowns.length; i++) {
						const opDropdown = dropdowns[i];
						if (opDropdown.classList.contains('show')) {
							opDropdown.classList.remove('show');
						}
					}
				}
			}
			
			////////////////// ARTICLES
			const articleCardList = document.querySelector(".articles_cardList");
			const articleTemplate = document.getElementById("template_articles");
			const cloneArticles = articleTemplate.content.cloneNode(true);
			
			cloneCategories.querySelector(".title1").innerText = titleRemove;
			cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
	
			categoriesCardList.appendChild(cloneCategories);
			articleCardList.appendChild(cloneArticles);
	});


/////////////////////////////// SCIENCE //////////////////////////////////////////////////
const RSS_URL_Science = `https://rss.nytimes.com/services/xml/rss/nyt/Science.xml`;

fetch(RSS_URL_Science)
  .then(response => response.text())
  .then((data) => {
		  const parser = new DOMParser(); // initialize dom parser
		  const srcDOM = parser.parseFromString(data, "application/xml"); 
		const convertData = xml2json(srcDOM);
		return convertData;
	}).then (data =>{
		//console.log(data.rss.channel.title);
		const categoryTitle = data.rss.channel.title;
		const titleRemove = categoryTitle.slice(9);
		console.log(titleRemove)

			/////////////////// CATEGORY
			const categoriesTemplate = document.getElementById("template_categories");
			const categoriesCardList = document.getElementById("categories_cardList");
			const cloneCategories = categoriesTemplate.content.cloneNode(true); 

			///////////////// BUTTON
			const button = cloneCategories.querySelector(".dropbtn");
			button.setAttribute("id", "button6");

			document.getElementById('button6').addEventListener('click', buttonClick6 );

			function buttonClick6 (){
				document.getElementById('buttonCategory').classList.toggle("show");
			}
			window.onclick = function (event) {
				if (!event.target.matches('.dropbtn')) {
					const dropdowns = document.getElementsByClassName('dropdown-content');
					const i;
					for (i = 0; i < dropdowns.length; i++) {
						const opDropdown = dropdowns[i];
						if (opDropdown.classList.contains('show')) {
							opDropdown.classList.remove('show');
						}
					}
				}
			}
			
			////////////////// ARTICLES
			const articleCardList = document.querySelector(".articles_cardList");
			const articleTemplate = document.getElementById("template_articles");
			const cloneArticles = articleTemplate.content.cloneNode(true);
			
			cloneCategories.querySelector(".title1").innerText = titleRemove;
			cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
	
			categoriesCardList.appendChild(cloneCategories);
			articleCardList.appendChild(cloneArticles);
	});



/////////////////////////////// WORLD //////////////////////////////////////////////////
const RSS_URL_World = `https://rss.nytimes.com/services/xml/rss/nyt/World.xml`;

fetch(RSS_URL_World)
  .then(response => response.text())
  .then((data) => {
		const parser = new DOMParser(); // initialize dom parser
		const srcDOM = parser.parseFromString(data, "application/xml"); 
		const convertData = xml2json(srcDOM);
		return convertData;
	}).then (data =>{
		//console.log(data.rss.channel.title);
		const categoryTitle = data.rss.channel.title;
		const titleRemove = categoryTitle.slice(9);
		console.log(data.rss.channel.item[0].title)
		
		/////////////////// CATEGORY
		const categoriesTemplate = document.getElementById("template_categories");
		const categoriesCardList = document.getElementById("categories_cardList");
		const cloneCategories = categoriesTemplate.content.cloneNode(true); 

		///////////////// BUTTON
		const button = cloneCategories.querySelector(".dropbtn");
		button.setAttribute("id", "button7");

		document.getElementById('button7').addEventListener('click', buttonClick7 );

			function buttonClick7 (){
				document.getElementById('buttonCategory').classList.toggle("show");
			}
			window.onclick = function (event) {
				if (!event.target.matches('.dropbtn')) {
					const dropdowns = document.getElementsByClassName('dropdown-content');
					const i;
					for (i = 0; i < dropdowns.length; i++) {
						const opDropdown = dropdowns[i];
						if (opDropdown.classList.contains('show')) {
							opDropdown.classList.remove('show');
						}
					}
				}
			}
		
		////////////////// ARTICLES
		const articleCardList = document.querySelector(".articles_cardList");
		const articleTemplate = document.getElementById("template_articles");
		const cloneArticles = articleTemplate.content.cloneNode(true);
		
		cloneCategories.querySelector(".title1").innerText = titleRemove;
		cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;

		categoriesCardList.appendChild(cloneCategories);
		articleCardList.appendChild(cloneArticles);
	});

	}())

});
