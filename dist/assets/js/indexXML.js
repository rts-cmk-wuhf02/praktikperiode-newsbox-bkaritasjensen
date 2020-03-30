"use strict";

var xmlContent = '';
var tableNews = document.getElementById('indexCategories-template');
fetch('HomePage.xml').then(function (response) {
  response.text().then(function (xml) {
    xmlContent = xml;
    var parser = new DOMParser();
    var xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
    var title = xmlDOM.querySelectorAll('title');
    title.forEach(function (newXmlNode) {
      console.log(newXmlNode);
      /* const indexCategoryTemplate = document.getElementById('indexCategories-template');
      const indexCategoryCardList = document.getElementsByClassName('indexCategories-cardList');
      
      const clone = indexCategoryTemplate.xmlContent.cloneNode(true);
      	clone.querySelector(".index__categoriTitle").innerText = newXmlNode.childElementCount[2].innerHTML; */

      /* let row = document.createElement('ul');
      	//Title
      let li = document.createElement('li');
      li.innerText = newXmlNode.children[2].innerHTML;
      row.appendChild(li);
      
      tableNews.children[1].appendChild(row); */

      /* indexCategoryCardList.appendChild(clone); */
    });
  });
});