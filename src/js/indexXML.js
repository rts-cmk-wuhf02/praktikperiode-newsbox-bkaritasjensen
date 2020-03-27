let xmlContent = '';
		let tableNews = document.getElementById('news');

		fetch('HomePage.xml').then((response) =>{
			response.text().then((xml) =>{
				xmlContent = xml;
				let parser = new DOMParser();
				let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
				let news = xmlDOM.querySelectorAll('item');

				news.forEach(newXmlNode =>{
					let row = document.createElement('tr');

					//Title
					let td = document.createElement('td');
					td.innerText = newXmlNode.children[0].innerHTML;
					row.appendChild(td);

					//Date
					td = document.createElement('td');
					td.innerText = newXmlNode.children[5].innerHTML;
					row.appendChild(td);

					//Description
					td = document.createElement('td');
					td.innerText = newXmlNode.children[4].innerHTML;
					row.appendChild(td);

					//Credit
					td = document.createElement('td');
					td.innerText = newXmlNode.lastChild.innerHTML;
					row.appendChild(td);
					
					tableNews.children[1].appendChild(row);
				});
			});
		});
