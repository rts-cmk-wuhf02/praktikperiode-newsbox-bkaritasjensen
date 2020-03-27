"use strict";

var xmlContent = '';
var tableNews = document.getElementById('news');
fetch('HomePage.xml').then(function (response) {
  response.text().then(function (xml) {
    xmlContent = xml;
    var parser = new DOMParser();
    var xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
    var news = xmlDOM.querySelectorAll('item');
    news.forEach(function (newXmlNode) {
      var row = document.createElement('tr'); //Title

      var td = document.createElement('td');
      td.innerText = newXmlNode.children[0].innerHTML;
      row.appendChild(td); //Date

      td = document.createElement('td');
      td.innerText = newXmlNode.children[5].innerHTML;
      row.appendChild(td); //Description

      td = document.createElement('td');
      td.innerText = newXmlNode.children[4].innerHTML;
      row.appendChild(td); //Credit

      td = document.createElement('td');
      td.innerText = newXmlNode.lastChild.innerHTML;
      row.appendChild(td);
      tableNews.children[1].appendChild(row);
    });
  });
});