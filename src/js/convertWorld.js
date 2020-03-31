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

let strxml = `
<channel>
<title>NYT > World News</title>
<link>https://www.nytimes.com/section/world</link>
<atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/World.xml" rel="self" type="application/rss+xml"/>
<description/>
<language>en-us</language>
<copyright>Copyright 2020 The New York Times Company</copyright>
<lastBuildDate>Thu, 26 Mar 2020 08:46:15 +0000</lastBuildDate>
<pubDate>Thu, 26 Mar 2020 08:46:15 +0000</pubDate>
<image>
<title>NYT > World News</title>
<url>
https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png
</url>
<link>https://www.nytimes.com/section/world</link>
</image>
<item>
<title>coronavirus</title>
<link>
https://www.nytimes.com/2020/03/26/world/coronavirus-news.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/26/world/coronavirus-news.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/26/world/coronavirus-news.html" rel="standout"/>
<description>
The measure promises a $1,200 payout to millions of Americans and increased jobless aid. It also creates a government bailout fund for distressed businesses.
</description>
<pubDate>Thu, 26 Mar 2020 08:11:53 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Senate</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Fauci, Anthony S</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
Trapped at Sea by Covid-19 Lockdowns, Crew Members Plead for Help
</title>
<link>
https://www.nytimes.com/2020/03/25/world/europe/coronavirus-ship-crews-trapped.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/europe/coronavirus-ship-crews-trapped.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/europe/coronavirus-ship-crews-trapped.html" rel="standout"/>
<description>
The seafarers who deliver gas, food and medicine are being forced to keep working. They cannot leave the ship: ‘We want to go home.’
</description>
<dc:creator>Matt Apuzzo and Selam Gebrekidan</dc:creator>
<pubDate>Wed, 25 Mar 2020 18:41:53 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ships and Shipping</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">International Transport Workers' Federation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mumbai (India)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Singapore</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/virus-ships01/virus-ships01-moth-v2.jpg" width="151"/>
<media:credit>Jerome Favre/EPA, via Shutterstock</media:credit>
<media:description>
A container ship sailing out of the Kwai Tsing Container Terminals in Hong Kong in February.
</media:description>
</item>
<item>
<title>Man Pleads Guilty to New Zealand Mosque Massacre</title>
<link>
https://www.nytimes.com/2020/03/25/world/australia/new-zealand-mosque-guilty-plea.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/australia/new-zealand-mosque-guilty-plea.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/australia/new-zealand-mosque-guilty-plea.html" rel="standout"/>
<description>
An Australian white supremacist charged with killing 51 worshipers at two mosques in New Zealand last year changed his plea to guilty in a surprise move.
</description>
<dc:creator>Damien Cave</dc:creator>
<pubDate>Thu, 26 Mar 2020 00:57:57 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New Zealand</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Christchurch (New Zealand)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Christchurch, New Zealand, Attack (March 2019)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mass Shootings</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mosques</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Tarrant, Brenton Harrison</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25nz-mosque/25nz-mosque-moth.jpg" width="151"/>
<media:credit>Lisa Maree Williams/Getty Images</media:credit>
<media:description>
A man adjusts flowers left this month at the Masjid An-Nur mosque on the anniversary of the worst mass shooting in New Zealand's history.
</media:description>
</item>
<item>
<title>Prince Charles Tests Positive for Coronavirus</title>
<link>
https://www.nytimes.com/2020/03/25/world/europe/prince-charles-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/europe/prince-charles-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/europe/prince-charles-coronavirus.html" rel="standout"/>
<description>
He has been displaying mild symptoms, the palace said in a statement. A spokesman said the queen “remains in good health.”
</description>
<dc:creator>Mark Landler</dc:creator>
<pubDate>Wed, 25 Mar 2020 16:38:46 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Royal Families</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Charles, Prince of Wales</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Elizabeth II, Queen of Great Britain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-royals/25virus-royals-moth.jpg" width="151"/>
<media:credit>Pool photo by Chris Jackson</media:credit>
<media:description>
Prince Charles, 71, had been experiencing mild symptoms from the virus but “otherwise remained in good health,” a statement said.
</media:description>
</item>
<item>
<title>Kabul Sikh Temple Attack: Gunman Kills 25</title>
<link>
https://www.nytimes.com/2020/03/25/world/asia/afghanistan-sikh-kabul.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/asia/afghanistan-sikh-kabul.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/asia/afghanistan-sikh-kabul.html" rel="standout"/>
<description>
The war rages even as coronavirus spreads, with the latest attack killing at least 25 at a Sikh temple in Kabul.
</description>
<dc:creator>Mujib Mashal and Fahim Abed</dc:creator>
<pubDate>Wed, 25 Mar 2020 20:37:26 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Sikhs and Sikhism</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Terrorism</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Afghanistan</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Kabul (Afghanistan)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25afghanistan-1/25afghanistan-1-moth.jpg" width="151"/>
<media:credit>Mohammad Ismail/Reuters</media:credit>
<media:description>
Security forces near the attacked Sikh center in Kabul, Afghanistan, on Wednesday.
</media:description>
</item>
<item>
<title>
Brazil and Mexico Are Latin America's Coronavirus Holdouts
</title>
<link>
https://www.nytimes.com/2020/03/25/world/americas/coronavirus-brasil-mexico.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/americas/coronavirus-brasil-mexico.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/americas/coronavirus-brasil-mexico.html" rel="standout"/>
<description>
The leaders of the region’s two largest nations — Mexico and Brazil — have largely dismissed the dangers and have resisted calls for a lockdown.
</description>
<dc:creator>
Ernesto Londoño, Manuela Andreoni, Letícia Casado, Azam Ahmed, Brent McDonald and Miguel Tovar
</dc:creator>
<pubDate>Wed, 25 Mar 2020 18:39:41 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bolsonaro, Jair (1955- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Lopez Obrador, Andres Manuel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Brazil</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Latin America</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mexico</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-latam/25virus-latam-moth-v2.jpg" width="151"/>
<media:credit>Daniel Berehulak for The New York Times</media:credit>
<media:description>
People gathered to watch street performers in Mexico City last week, even as much of the region began to shut down.
</media:description>
</item>
<item>
<title>
Suspect Held in South Korean Crackdown on Sexually Explicit Videos
</title>
<link>
https://www.nytimes.com/2020/03/25/world/asia/south-korea-pornography-online.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/asia/south-korea-pornography-online.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/asia/south-korea-pornography-online.html" rel="standout"/>
<description>
Cho Joo-bin was accused of blackmailing dozens of young women, including at least 16 minors, into making sexually explicit video clips of themselves.
</description>
<dc:creator>Choe Sang-Hun</dc:creator>
<pubDate>Wed, 25 Mar 2020 12:47:24 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Women's Rights</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Voyeurism (Criminal)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Women and Girls</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Child Pornography</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Telegram LLC</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Moon Jae-in</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Korea</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25skorea-videos-1/25skorea-videos-1-moth.jpg" width="151"/>
<media:credit>Pool photo by Kim Hong-Ji</media:credit>
<media:description>
Cho Joo-bin walking out of a police station as he was transferred to the prosecutors' office for further investigation in Seoul on Wednesday.
</media:description>
</item>
<item>
<title>
Turkey Indicts 20 Saudis in Jamal Khashoggi’s Killing
</title>
<link>
https://www.nytimes.com/2020/03/25/world/europe/turkey-jamal-khashoggi-saudis.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/europe/turkey-jamal-khashoggi-saudis.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/europe/turkey-jamal-khashoggi-saudis.html" rel="standout"/>
<description>
The dissident Saudi writer was killed in his country’s Istanbul consulate in 2018. But the Turkish case is unlikely to come to trial.
</description>
<dc:creator>Carlotta Gall</dc:creator>
<pubDate>Wed, 25 Mar 2020 16:18:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Assassinations and Attempted Assassinations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Khashoggi, Jamal</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Saudi Arabia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Turkey</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Istanbul (Turkey)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Mohammed bin Salman (1985- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Qahtani, Saud al-</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United Nations</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25turkey-khashoggi/25turkey-khashoggi-moth.jpg" width="151"/>
<media:credit>Bulent Kilic/Agence France-Presse — Getty Images</media:credit>
<media:description>
A symbolic funeral held in Istanbul in 2018 for Jamal Khashoggi, the dissident writer killed in the city’s Saudi Consulate.
</media:description>
</item>
<item>
<title>
Coronavirus Helps Bring Down Kosovo’s Government, With Nudge From U.S.
</title>
<link>
https://www.nytimes.com/2020/03/25/world/europe/kosovo-serbia-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/europe/kosovo-serbia-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/europe/kosovo-serbia-coronavirus.html" rel="standout"/>
<description>
Kosovo’s prime minister lost a no-confidence vote on Wednesday, partly because of disputes over how to respond to the pandemic. Critics say American diplomacy also played a role.
</description>
<dc:creator>Patrick Kingsley</dc:creator>
<pubDate>Thu, 26 Mar 2020 07:36:36 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Kosovo</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Thaci, Hashim</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Albin Kurti</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-kosovo/25virus-kosovo-moth.jpg" width="151"/>
<media:credit>Armend Nimani/Agence France-Presse — Getty Images</media:credit>
<media:description>
Prime Minister Albin Kurti of Kosovo in February. His administration collapsed after his coalition partners sided with opposition parties in a no-confidence vote.
</media:description>
</item>
<item>
<title>In Israel, a Time to Pray Amid a Health Crisis</title>
<link>
https://www.nytimes.com/2020/03/25/world/middleeast/israel-virus-prayer.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/middleeast/israel-virus-prayer.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/middleeast/israel-virus-prayer.html" rel="standout"/>
<description>
When an emergency medical team had a break, they stopped to pray, one member facing Mecca and the other Jerusalem. A photo of it struck a chord.
</description>
<dc:creator>David M. Halbfinger</dc:creator>
<pubDate>Wed, 25 Mar 2020 21:48:08 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Prayers and Prayer Books</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Israel</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-israel/25virus-israel-moth.jpg" width="151"/>
<media:credit>Magen David Adom</media:credit>
<media:description>
The workers taking a moment to pray. “The whole world is battling this,” one said.
</media:description>
</item>
<item>
<title>
India, Day 1: World’s Largest Coronavirus Lockdown Begins
</title>
<link>
https://www.nytimes.com/2020/03/25/world/asia/india-lockdown-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/asia/india-lockdown-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/asia/india-lockdown-coronavirus.html" rel="standout"/>
<description>
India’s 1.3 billion people have been told to stay at home. For some, it will mean starving. And an already fragile economy may collapse.
</description>
<dc:creator>
Karan Deep Singh, Vindu Goel, Hari Kumar and Jeffrey Gettleman
</dc:creator>
<pubDate>Thu, 26 Mar 2020 03:07:19 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pedicabs and Rickshaws</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">IndiGo</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Modi, Narendra</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Shah, Amit (1964- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-india07/25virus-india07-moth-v2.jpg" width="151"/>
<media:credit>Atul Loke for The New York Times</media:credit>
<media:description>Waiting to get cooking gas in Mumbai.</media:description>
</item>
<item>
<title>
A Deluged System Leaves Some Elderly to Die, Rocking Spain’s Self-Image
</title>
<link>
https://www.nytimes.com/2020/03/25/world/europe/Spain-coronavirus-nursing-homes.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/europe/Spain-coronavirus-nursing-homes.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/europe/Spain-coronavirus-nursing-homes.html" rel="standout"/>
<description>
Even amid the coronavirus crisis, the tragedy unfolding in Spain’s nursing homes has shocked a nation that takes pride in its reverence for older people and in its health care system.
</description>
<dc:creator>Raphael Minder and Elian Peltier</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:01:49 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Nursing Homes</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Spain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Madrid (Spain)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Elderly</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-spain1/25virus-spain1-moth.jpg" width="151"/>
<media:credit>Fernando Villar/EPA, via Shutterstock</media:credit>
<media:description>
Workers in protective gear aiding a resident inside the Monte Hermoso retirement home in Madrid, where at least 19 residents reportedly died last week.
</media:description>
</item>
<item>
<title>
Far-Right Faction of German Populist Party Vows to Dissolve
</title>
<link>
https://www.nytimes.com/2020/03/25/world/europe/germany-populist-party.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/europe/germany-populist-party.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/europe/germany-populist-party.html" rel="standout"/>
<description>
The Wing, a group inside the Alternative for Germany party, promised to close down after a warning from the country’s intelligence service, but the change may be mostly cosmetic.
</description>
<dc:creator>Christopher F. Schuetze</dc:creator>
<pubDate>Wed, 25 Mar 2020 15:16:16 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Fringe Groups and Movements</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Neo Nazi Groups</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Germany</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Hocke, Bjorn (1972- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Alternative for Germany</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25germany/25germany-moth.jpg" width="151"/>
<media:credit>Jens Schlueter/Agence France-Presse — Getty Images</media:credit>
<media:description>
Björn Höcke, perhaps the  most visible leader of the faction known as The Wing, will be allowed to remain in  the broader party, Alternative for Germany.
</media:description>
</item>
<item>
<title>
Britain Enlists an Army of Volunteers to Help Fight the Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/25/world/coronavirus-uk-volunteers.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/coronavirus-uk-volunteers.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/coronavirus-uk-volunteers.html" rel="standout"/>
<description>
The government has recruited more than 400,000 people to care for senior citizens who have been told to stay at home for 12 weeks.
</description>
<dc:creator>Mark Landler</dc:creator>
<pubDate>Wed, 25 Mar 2020 21:23:17 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Health Service</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Imperial College London</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ferguson, Neil M</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-uk/25virus-uk-moth.jpg" width="151"/>
<media:credit>Mary Turner for The New York Times</media:credit>
<media:description>
Volunteers delivering groceries for elderly residents in Rothbury, England. 
</media:description>
</item>
<item>
<title>
Coronavirus, Spain, New York: Your Thursday Briefing
</title>
<link>
https://www.nytimes.com/2020/03/26/briefing/coronavirus-spain-new-york.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/26/briefing/coronavirus-spain-new-york.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/26/briefing/coronavirus-spain-new-york.html" rel="standout"/>
<description>Here’s what you need to know.</description>
<dc:creator>Mike Ives</dc:creator>
<pubDate>Thu, 26 Mar 2020 06:25:35 +0000</pubDate>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/briefing/26ambriefing-euro-promo/26ambriefing-euro-slide-FFMQ-moth.jpg" width="151"/>
<media:credit>Gianfranco Tripodo for The New York Times</media:credit>
</item>
<item>
<title>
White House Considers Postponing Tariffs to Help Businesses: Live Updates
</title>
<link>
https://www.nytimes.com/2020/03/26/business/stock-market-today-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/26/business/stock-market-today-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/26/business/stock-market-today-coronavirus.html" rel="standout"/>
<description>
Live updates on stock market and business news during the coronavirus outbreak.
</description>
<pubDate>Thu, 26 Mar 2020 08:04:47 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stocks and Bonds</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Standard & Poor's 500-Stock Index</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/world/26market-briefing-imports/26market-briefing-imports-moth.jpg" width="151"/>
<media:credit>Damir Sagolj/Reuters</media:credit>
<media:description>An iron and steel plant in Chongqing, China.</media:description>
</item>
<item>
<title>Coronavirus Briefing: What Happened Today</title>
<link>
https://www.nytimes.com/2020/03/25/us/coronavirus-today.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/us/coronavirus-today.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/us/coronavirus-today.html" rel="standout"/>
<description>
A $2 trillion package to help the U.S. ride out the pandemic is expected to pass quickly in both houses of Congress.
</description>
<dc:creator>Patrick J. Lyons</dc:creator>
<pubDate>Wed, 25 Mar 2020 23:22:05 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment Insurance</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Federal Aid (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Antibodies</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/us/oakImage-1585168838607/oakImage-1585168838607-moth.png" width="151"/>
</item>
<item>
<title>
Military Judge in 9/11 Trial at Guantánamo Is Retiring
</title>
<link>
https://www.nytimes.com/2020/03/25/us/politics/guantanamo-judge-sept-11-trial.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/us/politics/guantanamo-judge-sept-11-trial.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/us/politics/guantanamo-judge-sept-11-trial.html" rel="standout"/>
<description>
Col. W. Shane Cohen had served on the case for less than a year and set a January 2021 jury selection date that now appears uncertain.
</description>
<dc:creator>Carol Rosenberg</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:56:15 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Cohen, W Shane</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Guantanamo Bay Naval Base (Cuba)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Military Tribunals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Detainees</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Mohammed, Khalid Shaikh</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">September 11 (2001)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Defense Department</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United States Navy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/us/politics/25dc-gitmo/merlin_156630624_a0a9d7ed-189a-43dc-9500-b69f5919f24a-moth.jpg" width="151"/>
<media:credit>Office of Military Commissions</media:credit>
<media:description>
Col. W. Shane Cohen wrote that he was ending his 21 years of Air Force service on July 1.
</media:description>
</item>
<item>
<title>Can You Become Immune to the Coronavirus?</title>
<link>
https://www.nytimes.com/2020/03/25/health/coronavirus-immunity-antibodies.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/health/coronavirus-immunity-antibodies.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/health/coronavirus-immunity-antibodies.html" rel="standout"/>
<description>
It’s likely you can, at least for some period of time. That is opening new opportunities for testing and treatment.
</description>
<dc:creator>Apoorva Mandavilli</dc:creator>
<pubDate>Thu, 26 Mar 2020 00:35:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Antibodies</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Immune System</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Blood</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">England</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York State</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Vaccination and Immunization</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/science/25VIRUS-ANTIBODIES1/25VIRUS-ANTIBODIES1-moth.jpg" width="151"/>
<media:credit>Xinhua/Alamy Live News</media:credit>
<media:description>
A recovered coronavirus patient donated plasma at the Hainan Blood Center in Haikou, China, in February.
</media:description>
</item>
<item>
<title>
Coronavirus, India’s lockdown, Jamal Khashoggi: Your Thursday Briefing
</title>
<link>
https://www.nytimes.com/2020/03/25/briefing/coronavirus-india-lockdown-jamal-khashoggi.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/briefing/coronavirus-india-lockdown-jamal-khashoggi.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/briefing/coronavirus-india-lockdown-jamal-khashoggi.html" rel="standout"/>
<description>Here’s what you need to know.</description>
<dc:creator>Melina Delkic</dc:creator>
<pubDate>Wed, 25 Mar 2020 23:15:45 +0000</pubDate>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/26Briefing-ASia-slide-VKPH/26Briefing-ASia-slide-VKPH-moth.jpg" width="151"/>
<media:credit>Atul Loke for The New York Times</media:credit>
<media:description>
Lines to get cooking gas in Mumbai, India, on Wednesday. 
</media:description>
</item>
<item>
<title>
Economic Crisis Prompts a Showdown, and a Shutdown, in Suriname
</title>
<link>
https://www.nytimes.com/2020/03/25/world/americas/suriname-economic-crisis.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/americas/suriname-economic-crisis.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/americas/suriname-economic-crisis.html" rel="standout"/>
<description>
The coronavirus pandemic is but one factor in a confrontation between the South American nation’s business sector and its authoritarian government.
</description>
<dc:creator>Harmen Boerboom and Anatoly Kurmanaev</dc:creator>
<pubDate>Wed, 25 Mar 2020 18:30:49 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Currency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Black Markets</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bouterse, Desi</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Paramaribo (Suriname)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25Suriname/25Suriname-moth.jpg" width="151"/>
<media:credit>Adriana Loureiro Fernandez for The New York Times</media:credit>
<media:description>
The streets of Paramaribo, Suriname, as it confronted a deepening economic crisis.
</media:description>
</item>
<item>
<title>
‘None of Us Saw It Ending This Way’: Peace Corps Volunteers Evacuate Abruptly
</title>
<link>
https://www.nytimes.com/2020/03/25/us/peace-corps-volunteers-fired-virus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/us/peace-corps-volunteers-fired-virus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/us/peace-corps-volunteers-fired-virus.html" rel="standout"/>
<description>
When the agency suspended all operations for the first time in its history, more than 7,000 volunteers in about 60 countries packed their bags, said their goodbyes and rushed to get home.
</description>
<dc:creator>Mariel Padilla</dc:creator>
<pubDate>Thu, 26 Mar 2020 00:25:48 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Volunteers and Community Service</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Peace Corps</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Peace Corps Assn</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Dominican Republic</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Morocco</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Tanzania</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Zambia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Senegal</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Glenn Blumhorst</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Joshua Johnson</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Jody Olsen</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Miguel Garcia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Elizabeth Burke</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Hailey Hall</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ashley Vetter</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">JP Gibson</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">QueenEster Adu</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/multimedia/23xp-virus-peacecorps1/23xp-virus-peacecorps1-moth.jpg" width="151"/>
<media:credit>Paula Ospina</media:credit>
<media:description>
Peace Corps volunteers working in Fatick, Senegal, last fall. “We didn’t have time to mentally prepare for leaving,” said one volunteer who was in the country.
</media:description>
</item>
<item>
<title>
Citing Virus, Putin Suspends Vote on Keeping Him in Power
</title>
<link>
https://www.nytimes.com/2020/03/25/world/europe/russia-putin-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/europe/russia-putin-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/europe/russia-putin-coronavirus.html" rel="standout"/>
<description>
President Vladimir V. Putin of Russia postponed a referendum on a constitutional change to term limits and ordered a weeklong national holiday to help halt the spread of the coronavirus.
</description>
<dc:creator>Andrew Higgins</dc:creator>
<pubDate>Wed, 25 Mar 2020 17:23:40 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Term Limits (Political Office)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Putin, Vladimir V</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Russia</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-putin/25virus-briefing-putin-moth.jpg" width="151"/>
<media:credit>Sergey Ponomarev for The New York Times</media:credit>
<media:description>
Watching President Vladimir V. Putin’s national address on Wednesday from a bar in Moscow.
</media:description>
</item>
<item>
<title>
Citing Death Penalty, U.K. Court Blocks Giving Evidence on ISIS ‘Beatles’ to U.S.
</title>
<link>
https://www.nytimes.com/2020/03/25/us/isis-beatles-death-penalty.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/us/isis-beatles-death-penalty.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/us/isis-beatles-death-penalty.html" rel="standout"/>
<description>
The decision raised the question of whether the Trump administration will promise not to seek the execution of two ISIS detainees accused of abusing hostages.
</description>
<dc:creator>Charlie Savage and Adam Goldman</dc:creator>
<pubDate>Wed, 25 Mar 2020 18:15:45 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Elsheikh, El Shafee</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kotey, Alexanda</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Defense and Military Forces</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Detainees</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Terrorism</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Capital Punishment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Murders, Attempted Murders and Homicides</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Suits and Litigation (Civil)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Torture</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Extradition</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Islamic State in Iraq and Syria (ISIS)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Justice Department</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Supreme Court of the United Kingdom</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Syria</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/us/politics/25dc-beatles/25dc-beatles-moth.jpg" width="151"/>
<media:credit>Hussein Malla/Associated Press</media:credit>
<media:description>
Alexanda Kotey, left, and El Shafee Elsheikh are being held by the American military in Iraq.
</media:description>
</item>
<item>
<title>Jane Goodall Is Self-Isolating, Too</title>
<link>
https://www.nytimes.com/2020/03/25/science/jane-goodall-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/science/jane-goodall-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/science/jane-goodall-coronavirus.html" rel="standout"/>
<description>
She’s in England, in the house she grew up in, and she has a few thoughts about chimpanzees, the coronavirus pandemic and the loo paper shortage.
</description>
<dc:creator>James Gorman</dc:creator>
<pubDate>Wed, 25 Mar 2020 16:16:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Goodall, Jane</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Monkeys and Apes</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Animal Cognition</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">van Lawick, Hugo</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Africa</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Cambridge (England)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Tanzania</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/science/25GOODALL-QNA1/25GOODALL-QNA1-moth.jpg" width="151"/>
<media:credit>Enric Fontcuberta/EPA, via Shutterstock</media:credit>
<media:description>
British primatologist Jane Goodall in the science museum CosmoCaixa of Barcelona in 2018.
</media:description>
</item>
<item>
<title>
Israeli Parliament Speaker Quits, but Political Deadlock No Closer to an End
</title>
<link>
https://www.nytimes.com/2020/03/25/world/middleeast/israel-parliament-speaker-yuli-edelstein.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/middleeast/israel-parliament-speaker-yuli-edelstein.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/middleeast/israel-parliament-speaker-yuli-edelstein.html" rel="standout"/>
<description>
The resignation of Yuli Edelstein, an ally of Prime Minister Benjamin Netanyahu’s, will allow opposition lawmakers to take control of the legislative process.
</description>
<dc:creator>David M. Halbfinger</dc:creator>
<pubDate>Wed, 25 Mar 2020 21:16:46 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Israel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Edelstein, Yuli (1958- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Legislatures and Parliaments</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Blue and White (Israeli Political Party)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Likud Party (Israel)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Netanyahu, Benjamin</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Gantz, Benny</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25israel01/25israel01-moth.jpg" width="151"/>
<media:credit>Photo pool by Debbie Hill</media:credit>
<media:description>
Prime Minister Benjamin Netanyahu of Israel, center left, and Yuli Edelstein, then the Knesset speaker, in Jerusalem in 2018.
</media:description>
</item>
<item>
<title>
What to Call 2021 Olympics? Just One of Many Challenges for Japan
</title>
<link>
https://www.nytimes.com/2020/03/25/world/asia/japan-olympics-delay.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/asia/japan-olympics-delay.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/asia/japan-olympics-delay.html" rel="standout"/>
<description>
The decision to delay the world’s largest sporting event will pose an unprecedented series of economic, political and logistical hurdles.
</description>
<dc:creator>Motoko Rich and Ben Dooley</dc:creator>
<pubDate>Wed, 25 Mar 2020 14:43:05 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games (2020)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Abe, Shinzo</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Tokyo (Japan)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-japan-olympics-1/25virus-japan-olympics-1-moth.jpg" width="151"/>
<media:credit>Noriko Hayashi for The New York Times</media:credit>
<media:description>
These rings, if the coronavirus can be brought to heel, will still be around in Tokyo a year from now.
</media:description>
</item>
<item>
<title>
Coronavirus, Senate, India: Your Wednesday Briefing
</title>
<link>
https://www.nytimes.com/2020/03/25/briefing/coronavirus-senate-india.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/briefing/coronavirus-senate-india.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/briefing/coronavirus-senate-india.html" rel="standout"/>
<description>Here's what you need to know.</description>
<dc:creator>Chris Stanford</dc:creator>
<pubDate>Wed, 25 Mar 2020 11:47:17 +0000</pubDate>
</item>
<item>
<title>
North Macedonia Awaits Marijuana Laws to Become a 'Cannabis Superpower'
</title>
<link>
https://www.nytimes.com/2020/03/25/business/north-macedonia-marijuana.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/north-macedonia-marijuana.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/north-macedonia-marijuana.html" rel="standout"/>
<description>
Vying to become Europe’s “Cannabis Superpower,” marijuana entrepreneurs in the recently rebranded country are waiting for the government to act.
</description>
<dc:creator>David Segal</dc:creator>
<pubDate>Wed, 25 Mar 2020 09:00:30 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Marijuana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Marijuana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Foreign Investments</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Macedonia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Skopje (Macedonia)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25MACEDONIA-01/25MACEDONIA-01-moth.jpg" width="151"/>
<media:credit>Loulou d'Aki for The New York Times</media:credit>
<media:description>Pharmacon employees tending to “mother” plants.</media:description>
</item>
<item>
<title>
Death of Store Clerk in Italy Highlights Contagion’s New Front Line
</title>
<link>
https://www.nytimes.com/2020/03/25/world/europe/coronavirus-italy-supermarkets.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/europe/coronavirus-italy-supermarkets.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/europe/coronavirus-italy-supermarkets.html" rel="standout"/>
<description>
The pandemic has turned people who fill often overlooked, low-paid jobs into unlikely heroes. They are also getting sick or dying.
</description>
<dc:creator>Emma Bubola</dc:creator>
<pubDate>Wed, 25 Mar 2020 11:44:11 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Supermarkets and Grocery Stores</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shopping and Retail</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Postal Service and Post Offices</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24virus-italy-shops/24virus-italy-shops-moth.jpg" width="151"/>
<media:credit>Alessandro Grassani for The New York Times</media:credit>
<media:description>
A supermarket in Milan on Monday. A sign in the shop asks customers to stay out of certain areas.
</media:description>
</item>
<item>
<title>
Coronavirus, Albania, Terrence McNally: Your Wednesday Briefing
</title>
<link>
https://www.nytimes.com/2020/03/25/briefing/coronavirus-albania-terrence-mcnally.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/briefing/coronavirus-albania-terrence-mcnally.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/briefing/coronavirus-albania-terrence-mcnally.html" rel="standout"/>
<description>Here’s what you need to know.</description>
<dc:creator>Mike Ives</dc:creator>
<pubDate>Wed, 25 Mar 2020 08:11:03 +0000</pubDate>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/briefing/25ambriefing-euro-promo/25ambriefing-euro-promo-moth.jpg" width="151"/>
<media:credit>Rajesh Kumar Singh/Associated Press</media:credit>
</item>
<item>
<title>Trump May Defer Tariff Payments to Help Businesses</title>
<link>
https://www.nytimes.com/2020/03/25/business/stock-market-corona.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/stock-market-corona.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/stock-market-corona.html" rel="standout"/>
<description>
Live updates on stock market and business news during the coronavirus outbreak.
</description>
<pubDate>Thu, 26 Mar 2020 04:33:55 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stocks and Bonds</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25markets-briefing-senate/25markets-briefing-senate-moth-v2.jpg" width="151"/>
<media:credit>Anna Moneymaker/The New York Times</media:credit>
<media:description>
Treasury Secretary Steven Mnuchin, center, with other officials on Capitol Hill.
</media:description>
</item>
<item>
<title>Live Coronavirus Updates and Coverage</title>
<link>
https://www.nytimes.com/2020/03/25/world/coronavirus-news-live.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/coronavirus-news-live.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/coronavirus-news-live.html" rel="standout"/>
<description>
Gov. Andrew Cuomo said there were early signs that New York’s restrictions on gatherings could be slowing the virus but that more needed to be done in New York City.
</description>
<pubDate>Thu, 26 Mar 2020 07:47:18 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Cuomo, Andrew M</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Modi, Narendra</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Europe</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
U.N. Issues $2 Billion Appeal to Combat Virus and Urges Aid for Other Crises
</title>
<link>
https://www.nytimes.com/2020/03/24/us/politics/un-coronavirus-aid.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/us/politics/un-coronavirus-aid.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/us/politics/un-coronavirus-aid.html" rel="standout"/>
<description>
Without continued humanitarian assistance, the U.N. warned, crisis areas will be unable to contain the coronavirus, potentially killing millions of people.
</description>
<dc:creator>Lara Jakes</dc:creator>
<pubDate>Wed, 25 Mar 2020 05:56:48 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Humanitarian Aid</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Refugees and Displaced Persons</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United Nations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">World Health Organization</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/us/politics/24dc-virus-un/24dc-virus-un-moth.jpg" width="151"/>
<media:credit>Ivor Prickett for The New York Times</media:credit>
<media:description>
Iraqis fleeing Iran because of the coronavirus outbreak were screened upon arrival in Iraq this month.
</media:description>
</item>
<item>
<title>Coronavirus Briefing: What Happened Today</title>
<link>
https://www.nytimes.com/2020/03/24/us/coronavirus-today.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/us/coronavirus-today.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/us/coronavirus-today.html" rel="standout"/>
<description>
President Trump said he wanted to lift restrictions by Easter. Health experts warned that would be disastrous.
</description>
<dc:creator>Patrick J. Lyons</dc:creator>
<pubDate>Tue, 24 Mar 2020 23:12:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
</item>
<item>
<title>
Chimp Sanctuaries Restrict Visits Over Concerns About the Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/24/science/chimpanzee-sanctuaries-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/science/chimpanzee-sanctuaries-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/science/chimpanzee-sanctuaries-coronavirus.html" rel="standout"/>
<description>
There’s a possibility chimpanzees could be susceptible to Covid-19, so sanctuaries are taking precautions.
</description>
<dc:creator>James Gorman</dc:creator>
<pubDate>Tue, 24 Mar 2020 23:39:35 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Chimp Haven</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Monkeys and Apes</category>
<category domain="">chimpanzees</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Louisiana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/24VIRUS-CHIMPS1/24VIRUS-CHIMPS1-moth.jpg" width="151"/>
<media:credit>Melissa Golden for The New York Times</media:credit>
<media:description>
A new chimp arrival at Project Chimps, in Morganton, Ga., from the New Iberia Research Center at the University of Louisiana in 2017.
</media:description>
</item>
<item>
<title>
Britain Locks Down to Stem the Coronavirus. More or Less.
</title>
<link>
https://www.nytimes.com/2020/03/24/world/europe/britain-coronavirus-lockdown.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/europe/britain-coronavirus-lockdown.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/europe/britain-coronavirus-lockdown.html" rel="standout"/>
<description>
A day of confusion and contradictory images as Britons struggled to adapt to the new rules, and sometimes just understand them.
</description>
<dc:creator>Mark Landler and Stephen Castle</dc:creator>
<pubDate>Tue, 24 Mar 2020 22:22:51 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Johnson, Boris</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Khan, Sadiq</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24virus-uk4/24virus-uk4-moth.jpg" width="151"/>
<media:credit>Andrew Testa for The New York Times</media:credit>
<media:description>
A few shops remained open in an otherwise empty Borough Market near the London Bridge, on Tuesday.
</media:description>
</item>
<item>
<title>
Facebook Is ‘Just Trying to Keep the Lights On’ as Traffic Soars in Pandemic
</title>
<link>
https://www.nytimes.com/2020/03/24/technology/virus-facebook-usage-traffic.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/technology/virus-facebook-usage-traffic.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/technology/virus-facebook-usage-traffic.html" rel="standout"/>
<description>
The social network is straining to deal with skyrocketing usage as its 45,000 employees work from home for the first time.
</description>
<dc:creator>Mike Isaac and Sheera Frenkel</dc:creator>
<pubDate>Tue, 24 Mar 2020 21:59:12 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Facebook Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Zuckerberg, Mark E</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Telecommuting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Instant Messaging</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Advertising and Marketing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Telephones and Telecommunications</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/00virus-facebook1/00virus-facebook1-moth.jpg" width="151"/>
<media:credit>Jason Henry for The New York Times</media:credit>
<media:description>
Facebook’s 45,000 employees have been asked to work at home during the pandemic, emptying the offices.
</media:description>
</item>
<item>
<title>
Coronavirus in Europe: Thousands of Health Workers Out of Action
</title>
<link>
https://www.nytimes.com/2020/03/24/world/europe/coronavirus-europe-covid-19.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/europe/coronavirus-europe-covid-19.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/europe/coronavirus-europe-covid-19.html" rel="standout"/>
<description>
The thinning ranks of doctors and nurses, particularly in Spain, are hampering the ability to fight the epidemic, straining hospitals and raising fears that health workers are spreading the coronavirus.
</description>
<dc:creator>Raphael Minder and Elian Peltier</dc:creator>
<pubDate>Tue, 24 Mar 2020 21:21:48 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Spain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Doctors</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Nursing and Nurses</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Emergency Medical Treatment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Europe</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25virus-spain/25virus-spain-moth-v2.jpg" width="151"/>
<media:credit>Samuel Aranda for The New York Times</media:credit>
<media:description>
Health care workers outside a hospital in Barcelona, Spain, on Tuesday.
</media:description>
</item>
<item>
<title>
For Afghanistan Already on Brink, U.S. Aid Cut Is a Big Shove
</title>
<link>
https://www.nytimes.com/2020/03/24/world/asia/afghanistan-us-aid-cut.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/asia/afghanistan-us-aid-cut.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/asia/afghanistan-us-aid-cut.html" rel="standout"/>
<description>
The billion-dollar aid cut, accompanied by a stinging American rebuke, came as the country was already grappling with multiple crises.
</description>
<dc:creator>Mujib Mashal</dc:creator>
<pubDate>Wed, 25 Mar 2020 16:41:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Afghanistan War (2001- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Afghanistan</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Foreign Aid</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States International Relations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Taliban</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ghani, Ashraf</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Abdullah, Abdullah</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Pompeo, Mike</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Miller, Austin Scott (1961- )</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24afghanistan01/24afghanistan01-moth-v2.jpg" width="151"/>
<media:credit>Jim Huylebroek for The New York Times</media:credit>
<media:description>
A view from the northern outskirts of Kabul this week.
</media:description>
</item>
<item>
<title>
India Under Lockdown, Hubei Province, Olympics: Your Wednesday Briefing
</title>
<link>
https://www.nytimes.com/2020/03/24/briefing/india-lockdown-modi-china-hubei-province.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/briefing/india-lockdown-modi-china-hubei-province.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/briefing/india-lockdown-modi-china-hubei-province.html" rel="standout"/>
<description>Here’s what you need to know.</description>
<dc:creator>Melina Delkic</dc:creator>
<pubDate>Tue, 24 Mar 2020 23:33:24 +0000</pubDate>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/us/25Briefing-Asia-slide-S5MW/25Briefing-Asia-slide-S5MW-moth.jpg" width="151"/>
<media:credit>
Indranil Mukherjee/Agence France-Presse — Getty Images
</media:credit>
<media:description>
A crowd at a pharmacy in Mumbai after Prime Minister Narendra Modi announced a lockdown on Tuesday.
</media:description>
</item>
<item>
<title>
U.K. Coronavirus Testing Shortage Lures Profiteers and Con Artists
</title>
<link>
https://www.nytimes.com/2020/03/24/world/europe/uk-coronavirus-tests-profiteering.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/europe/uk-coronavirus-tests-profiteering.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/europe/uk-coronavirus-tests-profiteering.html" rel="standout"/>
<description>
Private labs, clinics and opportunistic go-betweens have been snapping up diagnostic kits, often selling them at steep markups.
</description>
<dc:creator>Jane Bradley</dc:creator>
<pubDate>Tue, 24 Mar 2020 18:40:49 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Racketeering and Racketeers</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Health Service</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">London (England)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24virus-britain-profiteering01/24virus-britain-profiteering01-moth-v2.jpg" width="151"/>
<media:credit>Andrew Testa for The New York Times</media:credit>
<media:description>
The Royal Free Hospital in North London. Britain is aiming to test 25,000 patients a day for the coronavirus.
</media:description>
</item>
<item>
<title>
Coronavirus in India: Modi Orders Total Lockdown of 21 Days
</title>
<link>
https://www.nytimes.com/2020/03/24/world/asia/india-coronavirus-lockdown.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/asia/india-coronavirus-lockdown.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/asia/india-coronavirus-lockdown.html" rel="standout"/>
<description>
With four hours’ notice, India’s prime minister announced that no one could leave home for 21 days — the most severe step taken anywhere in the war against the coronavirus.
</description>
<dc:creator>Jeffrey Gettleman and Kai Schultz</dc:creator>
<pubDate>Wed, 25 Mar 2020 16:29:57 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Modi, Narendra</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Delhi (India)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24virus-india/24virus-india-moth-v3.jpg" width="151"/>
<media:credit>Anupam Nath/Associated Press</media:credit>
<media:description>
A family watching Prime Minister Narendra Modi on Tuesday announcing a total lockdown across India to contain the coronavirus outbreak.
</media:description>
</item>
<item>
<title>
As Tourism Plummets in Thailand, Elephants Are Out of Work, Too
</title>
<link>
https://www.nytimes.com/2020/03/24/world/asia/coronavirus-thailand-elephants.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/asia/coronavirus-thailand-elephants.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/asia/coronavirus-thailand-elephants.html" rel="standout"/>
<description>
With the coronavirus pandemic keeping visitors away, elephant parks are closing, and the industry fears the animals could be forced back into illegal logging or begging on city streets.
</description>
<dc:creator>
Richard C. Paddock, Muktita Suhartono and Adam Dean
</dc:creator>
<pubDate>Wed, 25 Mar 2020 04:30:56 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Elephants</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Animal Abuse, Rights and Welfare</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Thailand</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/00thailand-elephants-promo/00thailand-elephants-span-moth.jpg" width="151"/>
<media:credit>Adam Dean for The New York Times</media:credit>
<media:description>
Amnuai Charornsuksombat, 36, feeds his elephants after he had to return them to his village due to dwindling tourists at the parks where they worked, in Baan Thung Luang, Thailand on Sunday.
</media:description>
</item>
<item>
<title>
In World’s Most Vulnerable Countries, Coronavirus Pandemic Rivals the 2008 Crisis
</title>
<link>
https://www.nytimes.com/2020/03/24/business/coronavirus-per-country-pandemic.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/coronavirus-per-country-pandemic.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/coronavirus-per-country-pandemic.html" rel="standout"/>
<description>
As capital flees emerging markets, those countries are absorbing the most potent economic shocks of the coronavirus outbreak.
</description>
<dc:creator>
Peter S. Goodman, Daniel Politi, Suhasini Raj, Lynsey Chutel and Abdi Latif Dahir
</dc:creator>
<pubDate>Wed, 25 Mar 2020 16:01:36 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Third World and Developing Countries</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Recession and Depression</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Foreign Investments</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Currency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">International Monetary Fund</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Credit and Debt</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Poverty</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Argentina</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Africa</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Turkey</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Philippines</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25Virus-VulnerableEconomies-sub/24Virus-VulnerableEconomies-sub-moth.jpg" width="151"/>
<media:credit>Ulet Ifansasti for The New York Times</media:credit>
<media:description>
The Prambanan temple complex in Yogyakarta, Indonesia, is closed to the public.
</media:description>
</item>
<item>
<title>
At Least 60 Migrants Are Found Dead in a Truck in Mozambique
</title>
<link>
https://www.nytimes.com/2020/03/24/world/africa/mozambique-truck-migrants-dead.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/africa/mozambique-truck-migrants-dead.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/africa/mozambique-truck-migrants-dead.html" rel="standout"/>
<description>
Officials, who forced the driver to open the container after hearing knocking, also found 14 survivors inside the vehicle.
</description>
<dc:creator>The Associated Press</dc:creator>
<pubDate>Tue, 24 Mar 2020 13:30:42 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Illegal Immigration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mozambique</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24mozambique/24mozambique-moth-v2.jpg" width="151"/>
<media:credit>EPA, via Shutterstock</media:credit>
<media:description>
Police officers in Tete Province, Mozambique, spoke to survivors sitting in a pickup after the discovery of the bodies on Tuesday.
</media:description>
</item>
<item>
<title>
Coronavirus in China: Hubei Province Lockdown Eased After 2 Months
</title>
<link>
https://www.nytimes.com/2020/03/24/world/asia/china-coronavirus-lockdown-hubei.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/asia/china-coronavirus-lockdown-hubei.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/asia/china-coronavirus-lockdown-hubei.html" rel="standout"/>
<description>
The province will let people outside Wuhan leave for the first time since late January. Despite the official sign of confidence, many fear the virus is still spreading silently.
</description>
<dc:creator>Vivian Wang and Sui-Lee Wee</dc:creator>
<pubDate>Tue, 24 Mar 2020 14:42:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Hubei Province (China)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Wuhan (China)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24china-virus01/24china-virus01-moth.jpg" width="151"/>
<media:credit>Agence France-Presse — Getty Images</media:credit>
<media:description>
Workers with containers of disinfectant preparing on Tuesday to spray the central railway station in Wuhan, the city in Hubei Province that emerged in January as the epicenter of the coronavirus outbreak.
</media:description>
</item>
<item>
<title>
Coronavirus, Anthony Fauci, Olympics: Your Tuesday Briefing
</title>
<link>
https://www.nytimes.com/2020/03/24/briefing/coronavirus-anthony-fauci-olympics.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/briefing/coronavirus-anthony-fauci-olympics.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/briefing/coronavirus-anthony-fauci-olympics.html" rel="standout"/>
<description>Here's what you need to know.</description>
<dc:creator>Chris Stanford</dc:creator>
<pubDate>Tue, 24 Mar 2020 12:33:01 +0000</pubDate>
</item>
<item>
<title>
Nearly a Million Children Left Behind in Venezuela as Parents Migrate
</title>
<link>
https://www.nytimes.com/2020/03/24/world/americas/venezuela-migration-children.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/americas/venezuela-migration-children.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/americas/venezuela-migration-children.html" rel="standout"/>
<description>
Seven years into an economic crisis, mothers and fathers have been forced to go abroad in search of work, leaving hundreds of thousands of children in the hands of relatives, friends — and sometimes, one another.
</description>
<pubDate>Tue, 24 Mar 2020 16:09:14 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Venezuela</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Children and Childhood</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Women and Girls</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Immigration and Emigration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Foreign Workers</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Refugees and Displaced Persons</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Parenting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Families and Family Life</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/world/22Venezuela-Children-Promo2/22Venezuela-Children-Promo2-moth-v2.jpg" width="151"/>
<media:credit>Meridith Kohut for The New York Times</media:credit>
<media:description>
Ana, center front, comforting one of the youngest girls while they watch a movie in their pajamas before bed.
</media:description>
</item>
<item>
<title>How to See the World When You’re Stuck at Home</title>
<link>
https://www.nytimes.com/2020/03/24/travel/coronavirus-virtual-travel.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/travel/coronavirus-virtual-travel.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/travel/coronavirus-virtual-travel.html" rel="standout"/>
<description>
When you are quarantined or cancel your trip, you can still go on a journey. The secret? The author Reif Larsen says it’s Google Street View.
</description>
<dc:creator>Reif Larsen</dc:creator>
<pubDate>Tue, 24 Mar 2020 15:25:27 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="">Virtual Travel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Google Street View</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/29/travel/29Virtual-travel/29Virtual-travel-moth.jpg" width="151"/>
<media:credit>Nathan Asplund</media:credit>
</item>
<item>
<title>
Coronavirus, United Kingdom, Disney Plus: Your Tuesday Briefing
</title>
<link>
https://www.nytimes.com/2020/03/24/briefing/coronavirus-united-kingdom-disney-plus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/briefing/coronavirus-united-kingdom-disney-plus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/briefing/coronavirus-united-kingdom-disney-plus.html" rel="standout"/>
<description>Here’s what you need to know.</description>
<dc:creator>Mike Ives</dc:creator>
<pubDate>Tue, 24 Mar 2020 13:04:18 +0000</pubDate>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/briefing/24ambriefing-euro-promo/24ambriefing-euro-promo-moth.jpg" width="151"/>
<media:credit>Andrew Testa for The New York Times</media:credit>
</item>
<item>
<title>
A ‘Golden Kilometer’ Rises Along Tel Aviv’s Waterfront
</title>
<link>
https://www.nytimes.com/2020/03/24/realestate/golden-kilometer-rises-along-tel-aviv-waterfront.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/realestate/golden-kilometer-rises-along-tel-aviv-waterfront.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/realestate/golden-kilometer-rises-along-tel-aviv-waterfront.html" rel="standout"/>
<description>
Apartments facing the Mediterranean are in high demand among expatriates and well-heeled locals.
</description>
<dc:creator>Debra Kamin</dc:creator>
<pubDate>Tue, 24 Mar 2020 04:55:45 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate and Housing (Residential)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Jews and Judaism</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Second Homes and Non-Primary Residences</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Immigration and Emigration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Tel Aviv (Israel)</category>
</item>
<item>
<title>
As Fleeing New Yorkers Are Told to Quarantine, Trump Says U.S. Should Reopen ‘by Easter’
</title>
<link>
https://www.nytimes.com/2020/03/24/world/coronavirus-news-live-updates.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/coronavirus-news-live-updates.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/coronavirus-news-live-updates.html" rel="standout"/>
<description>
Fleeing New Yorkers told to quarantine as Trump says the U.S. should reopen ‘by Easter.’
</description>
<pubDate>Wed, 25 Mar 2020 11:40:52 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">States (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Birx, Deborah L</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">California</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>Live Stock Market Coronavirus Updates and Tracker</title>
<link>
https://www.nytimes.com/2020/03/24/business/coronavirus-stock-market-live-tracker.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/coronavirus-stock-market-live-tracker.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/coronavirus-stock-market-live-tracker.html" rel="standout"/>
<description>
Live updates on stock market and business news during the coronavirus outbreak.
</description>
<pubDate>Wed, 25 Mar 2020 04:39:15 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Standard & Poor's 500-Stock Index</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24markets-briefing-cargo1/24markets-briefing-cargo1-moth.jpg" width="151"/>
<media:credit>Tom Pennington/Getty Images</media:credit>
<media:description>
American Airlines on Friday carried out its first cargo-only trip in 36 years.
</media:description>
</item>
<item>
<title>
At Least 13,500 Americans Abroad Need Help Getting Home, State Dept. Says
</title>
<link>
https://www.nytimes.com/2020/03/23/us/politics/coronavirus-us-citizens-abroad.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/us/politics/coronavirus-us-citizens-abroad.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/us/politics/coronavirus-us-citizens-abroad.html" rel="standout"/>
<description>
About 5,700 U.S. citizens and legal residents have already returned with the government’s assistance, and flights scheduled this week could help another 1,600.
</description>
<dc:creator>Lara Jakes and Ashley Southall</dc:creator>
<pubDate>Tue, 24 Mar 2020 15:33:09 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Evacuations and Evacuees</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">State Department</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Passports</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Defense Department</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Homeland Security Department</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Cruises</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Peru</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Ghana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Honduras</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/us/politics/23dc-virus-diplo/23dc-virus-diplo-moth.jpg" width="151"/>
<media:credit>Luka Gonzales/Agence France-Presse — Getty Images</media:credit>
<media:description>
Travelers waited for flights at Jorge Chávez International Airport in Lima, Peru, minutes before the border was closed last week.
</media:description>
</item>
<item>
<title>Coronavirus Briefing: What Happened Today</title>
<link>
https://www.nytimes.com/2020/03/23/us/coronavirus-today.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/us/coronavirus-today.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/us/coronavirus-today.html" rel="standout"/>
<description>
Epidemic-fighting experts explained what it would take for the U.S. to successfully stop the virus.
</description>
<dc:creator>Patrick J. Lyons</dc:creator>
<pubDate>Mon, 23 Mar 2020 23:37:07 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
Dip in Italy’s Cases Does Not Come Fast Enough for Swamped Hospitals
</title>
<link>
https://www.nytimes.com/2020/03/23/world/europe/italy-coronavirus-hospitals.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/world/europe/italy-coronavirus-hospitals.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/world/europe/italy-coronavirus-hospitals.html" rel="standout"/>
<description>
Even as new coronavirus infections appear to slow, a backlog is forcing doctors to make increasingly tough choices about treatment.
</description>
<dc:creator>Jason Horowitz and David D. Kirkpatrick</dc:creator>
<pubDate>Tue, 24 Mar 2020 04:18:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ventilators (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ethics and Official Misconduct</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Devices</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Oxygen</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/world/23virus-italy01/23virus-italy01-moth.jpg" width="151"/>
<media:credit>Luca Bruno/Associated Press</media:credit>
<media:description>
The intensive care unit of the Brescia Spedali Civili hospital in Italy last week. In Brescia, hospitals have been reporting hundreds of new cases a day.
</media:description>
</item>
<item>
<title>
Mozambique Insurgents Stage Attacks Near Big Gas Projects
</title>
<link>
https://www.nytimes.com/2020/03/23/world/africa/mozambique-insurgent-attack.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/world/africa/mozambique-insurgent-attack.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/world/africa/mozambique-insurgent-attack.html" rel="standout"/>
<description>
Government troops were fighting Islamist fighters amid concern that the country’s growing gas industry may be under threat.
</description>
<dc:creator>Reuters</dc:creator>
<pubDate>Mon, 23 Mar 2020 21:26:53 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mozambique</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Oil (Petroleum) and Gasoline</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Terrorism</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Exxon Mobil Corp</category>
</item>
<item>
<title>
Boris Stankovic, Who Paved Way for N.B.A.’s ‘Dream Team,’ Dies at 94
</title>
<link>
https://www.nytimes.com/2020/03/23/sports/basketball/boris-stankovic-dead.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/sports/basketball/boris-stankovic-dead.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/sports/basketball/boris-stankovic-dead.html" rel="standout"/>
<description>
As the longtime head of FIBA, the international game’s governing body, he successfully lobbied to let pros play in the Olympics.
</description>
<dc:creator>Marc Stein</dc:creator>
<pubDate>Mon, 23 Mar 2020 22:42:51 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Basketball</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Obituaries)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">International Basketball Federation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Basketball Assn</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Red Star Belgrade (Soccer Team)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Yugoslavia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Boris Stankovic</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/obituaries/23Stankovic1/merlin_170762127_f54af857-b81f-480e-b18a-44532fba96d8-moth.jpg" width="151"/>
<media:credit>
Doug Collier/Agence France-Presse &mdash; Getty Images
</media:credit>
<media:description>
Borislav Stankovic during the men&rsquo;s basketball draw in advance of the 1996 Olympics in Atlanta. He was the driving force in introducing professional players to the Games.
</media:description>
</item>
<item>
<title>
Coronavirus in the U.K.: Boris Johnson Orders Virtual Lockdown
</title>
<link>
https://www.nytimes.com/2020/03/23/world/europe/coronavirus-uk-boris-johnson.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/world/europe/coronavirus-uk-boris-johnson.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/world/europe/coronavirus-uk-boris-johnson.html" rel="standout"/>
<description>
The prime minister closed all nonessential shops, banning meetings of more than two people and requiring people to stay in their homes, except for trips for food or medicine.
</description>
<dc:creator>Mark Landler and Stephen Castle</dc:creator>
<pubDate>Tue, 24 Mar 2020 00:20:39 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">London (England)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Johnson, Boris</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/world/23virus-uk/merlin_170866095_ecdb9c56-9fbd-4ea3-a8b5-078dd8627206-moth.jpg" width="151"/>
<media:credit>Andrew Testa for The New York Times</media:credit>
<media:description>
Pedestrians in London on Monday. Prime Minister Boris Johnson announced that he would place Britain under a virtual lockdown.
</media:description>
</item>
<item>
<title>
U.S. and U.A.E. Troops Hold Major Exercise Amid Virus and Iran Tensions
</title>
<link>
https://www.nytimes.com/2020/03/23/world/middleeast/us-and-uae-troops-hold-major-exercise-amid-virus-and-iran-tensions.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/world/middleeast/us-and-uae-troops-hold-major-exercise-amid-virus-and-iran-tensions.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/world/middleeast/us-and-uae-troops-hold-major-exercise-amid-virus-and-iran-tensions.html" rel="standout"/>
<description>
The biennial exercise, called Native Fury, shows the close ties between American forces and the U.A.E.
</description>
<dc:creator>The Associated Press</dc:creator>
<pubDate>Mon, 23 Mar 2020 22:02:36 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United Arab Emirates</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United States Army</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United States Marine Corps</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United States Navy</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/world/23us-gulf/23us-gulf-moth-v2.jpg" width="151"/>
<media:credit>Jon Gambrell/Associated Press</media:credit>
<media:description>
Emirati forces advance by land and air during an exercise at an Emirati military base in Al-Hamra, United Arab Emirates on Monday. The U.S. military held the major exercise with Emirati troops amid ongoing tensions with Iran.
</media:description>
</item>
<item>
<title>
South Korea’s Method, Coronavirus Treatment, SoftBank: Your Tuesday Briefing
</title>
<link>
https://www.nytimes.com/2020/03/23/briefing/south-korea-coronavirus-treatment-olympics.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/briefing/south-korea-coronavirus-treatment-olympics.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/briefing/south-korea-coronavirus-treatment-olympics.html" rel="standout"/>
<description>Here’s what you need to know.</description>
<dc:creator>Melina Delkic</dc:creator>
<pubDate>Mon, 23 Mar 2020 23:04:06 +0000</pubDate>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/world/23virus-korea03-copy/23virus-korea03-moth.jpg" width="151"/>
<media:credit>Yonhap/EPA, via Shutterstock</media:credit>
<media:description>
Workers sprayed disinfectant in a hallway at the government complex in Sejong, South Korea, in January.
</media:description>
</item>
<item>
<title>
Coronavirus Patients in Limbo as Gilead Suspends Emergency Drug Access
</title>
<link>
https://www.nytimes.com/2020/03/23/health/coronavirus-drugs-remdesivir.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/health/coronavirus-drugs-remdesivir.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/health/coronavirus-drugs-remdesivir.html" rel="standout"/>
<description>
The company says it will switch to a broader approach for its experimental drug, remdesivir. But it was overwhelmed by demand for a potential treatment promoted by President Trump.
</description>
<dc:creator>Katie Thomas</dc:creator>
<pubDate>Tue, 24 Mar 2020 14:51:16 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Remdesivir (Drug)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Clinical Trials</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Gilead Sciences Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/science/23VIRUS-DRUGS1/23VIRUS-DRUGS1-moth.jpg" width="151"/>
<media:credit>David Paul Morris/Bloomberg</media:credit>
<media:description>
Gilead Sciences headquarters in Foster City, Calif.
</media:description>
</item>
</channel>
  `;

const parser = new DOMParser(); // initialize dom parser
const srcDOM = parser.parseFromString(strxml, "application/xml"); 

//Now we can call DOM methods like GetElementById, etc. on scrDOM.

//Converting DOM Tree to json
console.log(xml2json(srcDOM));