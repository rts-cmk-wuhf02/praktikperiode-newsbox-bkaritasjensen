document.addEventListener("DOMContentLoaded", () =>{
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
		console.log(titleRemove)

		/////////////////// CATEGORY
		const categoriesTemplate = document.getElementById("template_categories");
		const categoriesCardList = document.getElementById("categories_cardList");
		const cloneCategories = categoriesTemplate.content.cloneNode(true); 
		
		////////////////// ARTICLES
		const articleCardList = document.querySelector(".articles_cardList");
		const articleTemplate = document.getElementById("template_articles");
		const cloneArticles = articleTemplate.content.cloneNode(true);
		
		cloneCategories.querySelector(".title1").innerText = titleRemove;
		cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;

		categoriesCardList.appendChild(cloneCategories);
		//articleCardList.appendChild(cloneArticles);
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
			
			////////////////// ARTICLES
			const articleCardList = document.querySelector(".articles_cardList");
			const articleTemplate = document.getElementById("template_articles");
			const cloneArticles = articleTemplate.content.cloneNode(true);
			
			cloneCategories.querySelector(".title1").innerText = titleRemove;
			cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
	
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
		
		////////////////// ARTICLES
		const articleCardList = document.querySelector(".articles_cardList");
		const articleTemplate = document.getElementById("template_articles");
		const cloneArticles = articleTemplate.content.cloneNode(true);
		
		cloneCategories.querySelector(".title1").innerText = titleRemove;
		cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;

		categoriesCardList.appendChild(cloneCategories);
		articleCardList.appendChild(cloneArticles);
	});



});
