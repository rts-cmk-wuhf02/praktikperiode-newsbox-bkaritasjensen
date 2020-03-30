let xmlContent = '';
		let tableNews = document.getElementById('indexCategories-template');

		fetch('HomePage.xml').then((response) =>{
			response.text().then((xml) =>{
				xmlContent = xml;
				let parser = new DOMParser();
				let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
				let title = xmlDOM.querySelectorAll('title');

				title.forEach(newXmlNode =>{
					console.log(newXmlNode)

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
