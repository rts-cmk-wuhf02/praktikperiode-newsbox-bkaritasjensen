"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    /**
     * This function coverts a DOM Tree into JavaScript Object. 
     * @param srcDOM: DOM Tree to be converted. 
     */
    function xml2json(srcDOM) {
      var children = _toConsumableArray(srcDOM.children); //base case for recursion.


      if (!children.length) {
        return srcDOM.innerHTML;
      } //initialization object to be returned.


      var jsonResult = {};

      var _iterator = _createForOfIteratorHelper(children),
          _step;

      try {
        var _loop = function _loop() {
          var child = _step.value;
          //checking is child has siblings of same name.
          var childIsArray = children.filter(function (eachChild) {
            return eachChild.nodeName === child.nodeName;
          }).length > 1; //If child is array, save the values as array, else as string.

          if (childIsArray) {
            if (jsonResult[child.nodeName] === undefined) {
              jsonResult[child.nodeName] = [xml2json(child)];
            } else {
              jsonResult[child.nodeName].push(xml2json(child));
            }
          } else {
            jsonResult[child.nodeName] = xml2json(child);
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return jsonResult;
    } /////////////////////////////////////////// HENTER DATA ///////////////////////////////////////////////////////////


    var RSS_URL_HomePage = "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";
    fetch(RSS_URL_HomePage).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser(); // initialize dom parser

      var srcDOM = parser.parseFromString(data, "application/xml");
      var convertData = xml2json(srcDOM);
      return convertData;
    }).then(function (data) {
      //console.log(data.rss.channel.title);
      var categoryTitle = data.rss.channel.title;
      var titleRemove = categoryTitle.slice(9);
      console.log(data.rss.channel); /////////////////// CATEGORY
      ////// INDEX & ARCHIVE

      var categoriesTemplate = document.getElementById("template_categories");
      var categoriesCardList = document.getElementById("categories_cardList");
      var cloneCategories = categoriesTemplate.content.cloneNode(true); ///// SETTINGS

      var settingsTemplate = document.getElementById("template_settings");
      var settingsCardList = document.getElementById("settings_cardList");
      var cloneSettings = settingsTemplate.content.cloneNode(true); ///////////////// BUTTON

      function showArticle() {
        document.querySelector(".articles_cardList").classList.add("show");
      } ////////////////// ARTICLES


      var articleCardList = document.querySelector(".articles_cardList");
      var articleTemplate = document.getElementById("template_articles");
      var cloneArticles = articleTemplate.content.cloneNode(true); ////////////////////////////// SET DATA
      ///// TITLE - INDEX, ARCHIVE 

      cloneCategories.querySelector(".setTitle").innerText = titleRemove;
      cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title; ///// SETTINGS

      cloneSettings.querySelector(".categoryTitle").innerText = titleRemove; ///////////////////////// CLONE

      categoriesCardList.appendChild(cloneCategories);
      articleCardList.appendChild(cloneArticles);
      settingsCardList.appendChild(cloneSettings);
    }); /////////////////////////////////////// HEALTH ////////////////////////////////////////

    var RSS_URL_Health = "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml";
    fetch(RSS_URL_Health).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser(); // initialize dom parser

      var srcDOM = parser.parseFromString(data, "application/xml");
      var convertData = xml2json(srcDOM);
      return convertData;
    }).then(function (data) {
      //console.log(data.rss.channel.title);
      var categoryTitle = data.rss.channel.title;
      var titleRemove = categoryTitle.slice(9);
      console.log(titleRemove); /////////////////// CATEGORY

      var categoriesTemplate = document.getElementById("template_categories");
      var categoriesCardList = document.getElementById("categories_cardList");
      var cloneCategories = categoriesTemplate.content.cloneNode(true); ///////////////// BUTTON

      var button = cloneCategories.querySelector(".dropbtn");
      button.setAttribute("id", "button2");
      document.getElementById('button2').addEventListener('click', buttonClick2);

      function buttonClick2() {
        document.getElementById('buttonCategory').classList.toggle("show");
      }

      window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName('dropdown-content');
          var i;

          for (i = 0; i < dropdowns.length; i++) {
            var opDropdown = dropdowns[i];

            if (opDropdown.classList.contains('show')) {
              opDropdown.classList.remove('show');
            }
          }
        }
      }; ////////////////// ARTICLES


      var articleCardList = document.querySelector(".articles_cardList");
      var articleTemplate = document.getElementById("template_articles");
      var cloneArticles = articleTemplate.content.cloneNode(true);
      cloneCategories.querySelector(".title1").innerText = titleRemove;
      cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
      categoriesCardList.appendChild(cloneCategories);
      articleCardList.appendChild(cloneArticles);
    }); /////////////////////////////// BUSINESS //////////////////////////////////////////////////

    var RSS_URL_Business = "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml";
    fetch(RSS_URL_Business).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser(); // initialize dom parser

      var srcDOM = parser.parseFromString(data, "application/xml");
      var convertData = xml2json(srcDOM);
      return convertData;
    }).then(function (data) {
      //console.log(data.rss.channel.title);
      var categoryTitle = data.rss.channel.title;
      var titleRemove = categoryTitle.slice(9);
      console.log(titleRemove); /////////////////// CATEGORY

      var categoriesTemplate = document.getElementById("template_categories");
      var categoriesCardList = document.getElementById("categories_cardList");
      var cloneCategories = categoriesTemplate.content.cloneNode(true); ///////////////// BUTTON

      var button = cloneCategories.querySelector(".dropbtn");
      button.setAttribute("id", "button3");
      document.getElementById('button3').addEventListener('click', buttonClick3);

      function buttonClick3() {
        document.getElementById('buttonCategory').classList.toggle("show");
      }

      window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName('dropdown-content');
          var i;

          for (i = 0; i < dropdowns.length; i++) {
            var opDropdown = dropdowns[i];

            if (opDropdown.classList.contains('show')) {
              opDropdown.classList.remove('show');
            }
          }
        }
      }; ////////////////// ARTICLES


      var articleCardList = document.querySelector(".articles_cardList");
      var articleTemplate = document.getElementById("template_articles");
      var cloneArticles = articleTemplate.content.cloneNode(true);
      cloneCategories.querySelector(".title1").innerText = titleRemove;
      cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
      categoriesCardList.appendChild(cloneCategories);
      articleCardList.appendChild(cloneArticles);
    }); /////////////////////////////// SPORT //////////////////////////////////////////////////

    var RSS_URL_Sport = "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml";
    fetch(RSS_URL_Sport).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser(); // initialize dom parser

      var srcDOM = parser.parseFromString(data, "application/xml");
      var convertData = xml2json(srcDOM);
      return convertData;
    }).then(function (data) {
      //console.log(data.rss.channel.title);
      var categoryTitle = data.rss.channel.title;
      var titleRemove = categoryTitle.slice(9);
      console.log(titleRemove); /////////////////// CATEGORY

      var categoriesTemplate = document.getElementById("template_categories");
      var categoriesCardList = document.getElementById("categories_cardList");
      var cloneCategories = categoriesTemplate.content.cloneNode(true); ///////////////// BUTTON

      var button = cloneCategories.querySelector(".dropbtn");
      button.setAttribute("id", "button4"); ////////////////// ARTICLES

      var articleCardList = document.querySelector(".articles_cardList");
      var articleTemplate = document.getElementById("template_articles");
      var cloneArticles = articleTemplate.content.cloneNode(true);
      cloneCategories.querySelector(".title1").innerText = titleRemove;
      cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
      categoriesCardList.appendChild(cloneCategories);
      articleCardList.appendChild(cloneArticles);
    }); /////////////////////////////// TECH //////////////////////////////////////////////////

    var RSS_URL_Tech = "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    fetch(RSS_URL_Tech).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser(); // initialize dom parser

      var srcDOM = parser.parseFromString(data, "application/xml");
      var convertData = xml2json(srcDOM);
      return convertData;
    }).then(function (data) {
      //console.log(data.rss.channel.title);
      var categoryTitle = data.rss.channel.title;
      var titleRemove = categoryTitle.slice(9);
      console.log(titleRemove); /////////////////// CATEGORY

      var categoriesTemplate = document.getElementById("template_categories");
      var categoriesCardList = document.getElementById("categories_cardList");
      var cloneCategories = categoriesTemplate.content.cloneNode(true); ///////////////// BUTTON

      var button = cloneCategories.querySelector(".dropbtn");
      button.setAttribute("id", "button5"); ////////////////// ARTICLES

      var articleCardList = document.querySelector(".articles_cardList");
      var articleTemplate = document.getElementById("template_articles");
      var cloneArticles = articleTemplate.content.cloneNode(true);
      cloneCategories.querySelector(".title1").innerText = titleRemove;
      cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
      categoriesCardList.appendChild(cloneCategories);
      articleCardList.appendChild(cloneArticles);
    }); /////////////////////////////// SCIENCE //////////////////////////////////////////////////

    var RSS_URL_Science = "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml";
    fetch(RSS_URL_Science).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser(); // initialize dom parser

      var srcDOM = parser.parseFromString(data, "application/xml");
      var convertData = xml2json(srcDOM);
      return convertData;
    }).then(function (data) {
      //console.log(data.rss.channel.title);
      var categoryTitle = data.rss.channel.title;
      var titleRemove = categoryTitle.slice(9);
      console.log(titleRemove); /////////////////// CATEGORY

      var categoriesTemplate = document.getElementById("template_categories");
      var categoriesCardList = document.getElementById("categories_cardList");
      var cloneCategories = categoriesTemplate.content.cloneNode(true); ///////////////// BUTTON

      var button = cloneCategories.querySelector(".dropbtn");
      button.setAttribute("id", "button6"); ////////////////// ARTICLES

      var articleCardList = document.querySelector(".articles_cardList");
      var articleTemplate = document.getElementById("template_articles");
      var cloneArticles = articleTemplate.content.cloneNode(true);
      cloneCategories.querySelector(".title1").innerText = titleRemove;
      cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
      categoriesCardList.appendChild(cloneCategories);
      articleCardList.appendChild(cloneArticles);
    }); /////////////////////////////// WORLD //////////////////////////////////////////////////

    var RSS_URL_World = "https://rss.nytimes.com/services/xml/rss/nyt/World.xml";
    fetch(RSS_URL_World).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser(); // initialize dom parser

      var srcDOM = parser.parseFromString(data, "application/xml");
      var convertData = xml2json(srcDOM);
      return convertData;
    }).then(function (data) {
      //console.log(data.rss.channel.title);
      var categoryTitle = data.rss.channel.title;
      var titleRemove = categoryTitle.slice(9);
      console.log(data.rss.channel.item[0].title); /////////////////// CATEGORY

      var categoriesTemplate = document.getElementById("template_categories");
      var categoriesCardList = document.getElementById("categories_cardList");
      var cloneCategories = categoriesTemplate.content.cloneNode(true); ///////////////// BUTTON

      var button = cloneCategories.querySelector(".dropbtn");
      button.setAttribute("id", "button7"); ////////////////// ARTICLES

      var articleCardList = document.querySelector(".articles_cardList");
      var articleTemplate = document.getElementById("template_articles");
      var cloneArticles = articleTemplate.content.cloneNode(true);
      cloneCategories.querySelector(".title1").innerText = titleRemove;
      cloneArticles.querySelector(".article").innerText = data.rss.channel.item[0].title;
      categoriesCardList.appendChild(cloneCategories);
      articleCardList.appendChild(cloneArticles);
    });
  })();
});