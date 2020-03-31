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
<title>NYT > Sports</title>
<link>https://www.nytimes.com/section/sports</link>
<atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml" rel="self" type="application/rss+xml"/>
<description/>
<language>en-us</language>
<copyright>Copyright 2020 The New York Times Company</copyright>
<lastBuildDate>Thu, 26 Mar 2020 08:51:32 +0000</lastBuildDate>
<pubDate>Thu, 26 Mar 2020 08:51:32 +0000</pubDate>
<image>
<title>NYT > Sports</title>
<url>
https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png
</url>
<link>https://www.nytimes.com/section/sports</link>
</image>
<item>
<title>
Can It Still Be ‘Euro 2020’ in 2021? Sponsors Hope So
</title>
<link>
https://www.nytimes.com/2020/03/25/sports/soccer/euro-2020-coronavirus-postponed-merchandise.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/sports/soccer/euro-2020-coronavirus-postponed-merchandise.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/sports/soccer/euro-2020-coronavirus-postponed-merchandise.html" rel="standout"/>
<description>
The coronavirus pandemic pushed the European Championship to 2021. For companies with warehouses full of Euro 2020 merchandise, it may be better to pretend nothing has changed.
</description>
<dc:creator>Tariq Panja</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:20:33 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">UEFA European Football Championship</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Advertising and Marketing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Soccer</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Union of European Football Assns (UEFA)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/sports/25euro-merch1/25euro-merch1-moth.jpg" width="151"/>
<media:credit>Robert Ghement/EPA, via Shutterstock</media:credit>
<media:description>
A volunteer at a UEFA guest hotel in Bucharest in November. The city was set to be one of the hosts for Euro 2020, which has been postponed for a year.
</media:description>
</item>
<item>
<title>
Deciding to Postpone the Olympics Was Tough. Actually Moving Them May Be Tougher
</title>
<link>
https://www.nytimes.com/2020/03/25/sports/olympics/coronavirus-olympics-postponement.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/sports/olympics/coronavirus-olympics-postponement.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/sports/olympics/coronavirus-olympics-postponement.html" rel="standout"/>
<description>
An entirely new challenge greets the International Olympic Committee and Tokyo: Pulling off the Games in 2021 instead of in 2020, as originally planned.
</description>
<dc:creator>Andrew Keh, Motoko Rich and Tariq Panja</dc:creator>
<pubDate>Wed, 25 Mar 2020 09:00:24 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games (2020)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">FINA</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">World Athletics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Broadcasting Co</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24virus-olypuzzle-1/merlin_170874015_92e00362-8c7a-464e-8ff1-d991a1881992-moth.jpg" width="151"/>
<media:credit>Noriko Hayashi for The New York Times</media:credit>
<media:description>
Organizers of the Tokyo Games have not yet determined the specifics of holding the Olympics in 2021.
</media:description>
</item>
<item>
<title>
Help for Disabled N.F.L. Players Is Sacrificed for Pension Deal
</title>
<link>
https://www.nytimes.com/2020/03/25/sports/football/nfl-retired-players-benefits.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/sports/football/nfl-retired-players-benefits.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/sports/football/nfl-retired-players-benefits.html" rel="standout"/>
<description>
Retired players will see bumps to pensions and an expansion to those who can receive them. But the win comes at a cost to benefits for players who are on total or permanent disability.
</description>
<dc:creator>Ken Belson</dc:creator>
<pubDate>Wed, 25 Mar 2020 15:29:22 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Football</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Disability Insurance</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pensions and Retirement Plans</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Organized Labor</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Football League</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Football League Players Assn</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Smith, DeMaurice</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ed O'Neil</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Keith O'Neil</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/sports/23NFL-DISABILITY6/merlin_170628840_232674f1-37c9-4ae6-9791-d40594732fd1-moth.jpg" width="151"/>
<media:credit>Libby March for The New York Times</media:credit>
<media:description>
The former N.F.L. player Ed O’Neil, 67, left, will see an estimated $1,400 increase to his monthly pension, but his son, Keith, also a former pro, will lose $2,339 in benefit payments. “Where is the thought process of taking away from guys who can’t work?” Ed O’Neil said.
</media:description>
</item>
<item>
<title>
The Coronavirus and the Postponement of the 2020 Tokyo Olympics, Explained
</title>
<link>
https://www.nytimes.com/article/coronavirus-summer-olympics-postponed.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/article/coronavirus-summer-olympics-postponed.html
</guid>
<atom:link href="https://www.nytimes.com/article/coronavirus-summer-olympics-postponed.html" rel="standout"/>
<description>
Your questions answered on what happened and what’s next with the Summer Olympics now not happening this year in Tokyo.
</description>
<dc:creator>Andrew Keh</dc:creator>
<pubDate>Wed, 25 Mar 2020 17:45:58 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games (2020)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">International Olympic Committee</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Tokyo (Japan)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Athletics and Sports</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/sports/25virus-olympics-explainer-1/25virus-olympics-explainer-1-moth.jpg" width="151"/>
<media:credit>Noriko Hayashi for The New York Times</media:credit>
<media:description>
The 2020 Tokyo Games were postponed this week until sometime next year.
</media:description>
</item>
<item>
<title>A New Rams Logo Draws Digital Boos From Fans</title>
<link>
https://www.nytimes.com/2020/03/25/sports/football/rams-logo-angelo-state.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/sports/football/rams-logo-angelo-state.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/sports/football/rams-logo-angelo-state.html" rel="standout"/>
<description>
The Los Angeles Rams made a much-anticipated update to their logo, and it did not go over well.
</description>
<dc:creator>Victor Mather</dc:creator>
<pubDate>Wed, 25 Mar 2020 07:00:06 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Logos</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Football</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Los Angeles Rams</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/sports/25nfl-rams/25nfl-rams-moth.jpg" width="151"/>
<media:credit>John Mccoy/Getty Images</media:credit>
<media:description>
The Los Angeles Rams rolled out a new logo this week. Fans are hoping the team’s iconic helmets will remain untouched.
</media:description>
</item>
<item>
<title>
On the Schedule: Chess, Horse Racing and Children Lifting
</title>
<link>
https://www.nytimes.com/2020/03/25/sports/chess-horse-racing-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/sports/chess-horse-racing-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/sports/chess-horse-racing-coronavirus.html" rel="standout"/>
<description>
Even the National Spelling Bee was canceled. But you can watch professional athletes work out at home with their children (as both coaches and weights).
</description>
<dc:creator>Victor Mather</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:13:42 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Exercise</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Poker (Card Game)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">World Series of Poker</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Kontinental Hockey League</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/sports/25nosports1/merlin_170730102_c79de730-53c3-4827-8420-6c8c30ffd8b7-moth.jpg" width="151"/>
<media:credit>Fide/Via Reuters</media:credit>
<media:description>
The Russian chess players Kirill Alekseenko and Ian Nepomniachtchi greeted each other with an elbow bump during the Candidates Tournament.
</media:description>
</item>
<item>
<title>
Olympians Have Another Year to Prepare for Tokyo. It’s a Blessing and a Curse.
</title>
<link>
https://www.nytimes.com/2020/03/24/sports/olympics/coronavirus-olympics-athletes-reaction.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/olympics/coronavirus-olympics-athletes-reaction.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/olympics/coronavirus-olympics-athletes-reaction.html" rel="standout"/>
<description>
The life of an Olympic athlete can be challenging and austere, and the training schedule can be relentless. Most athletes wanted a postponement, though even that has its challenges.
</description>
<dc:creator>
Juliet Macur, Karen Crouse, Andrew Keh and Matthew Futterman
</dc:creator>
<pubDate>Wed, 25 Mar 2020 13:58:38 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games (2020)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Johnson, Steele (1996- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ledecky, Katie</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Meehan, Greg</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Baker, Kathleen (1997- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Hernandez, Laurie (2000- )</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24virus-olyathletes-1/merlin_170873595_d00d020f-9965-4df3-8a74-c29558cae2da-moth.jpg" width="151"/>
<media:credit>Noriko Hayashi for The New York Times</media:credit>
<media:description>
Countdown clocks for the Tokyo Games will gain another year.
</media:description>
</item>
<item>
<title>
Coronavirus Impact: How a Crisis Is Changing the U.S.
</title>
<link>
https://www.nytimes.com/live/2020/coronavirus-usa-live-03-25
</link>
<guid isPermaLink="true">
https://www.nytimes.com/live/2020/coronavirus-usa-live-03-25
</guid>
<atom:link href="https://www.nytimes.com/live/2020/coronavirus-usa-live-03-25" rel="standout"/>
<description>
The coronavirus is changing how we live our daily lives. Taking a look at how the global pandemic has affected various aspects of life in the United States reveals the unique nature of this crisis.
</description>
<dc:creator>The New York Times</dc:creator>
<pubDate>Wed, 25 Mar 2020 21:42:49 +0000</pubDate>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/multimedia/live-blog-coronavirus-usa-live-03-25-header5/live-blog-coronavirus-usa-live-03-25-header5-moth.jpg" width="151"/>
<media:credit>Jose A. Alvarado Jr. for The New York Times</media:credit>
<media:description>
Shoppers worked to keep some distance between them in line at the Food Bazaar Supermarket in Brooklyn on Wednesday.
</media:description>
</item>
<item>
<title>
Carolina Releases Cam Newton, Completes Housecleaning
</title>
<link>
https://www.nytimes.com/2020/03/24/sports/football/cam-newton-panthers-injury-release.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/football/cam-newton-panthers-injury-release.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/football/cam-newton-panthers-injury-release.html" rel="standout"/>
<description>
The quarterback, a former league M.V.P., was the most visible remnant of the franchise’s old identity. Facing free agency with an uncertain foot injury, 30-year-old Newton may be a tough sell.
</description>
<dc:creator>Ben Shpigel</dc:creator>
<pubDate>Tue, 24 Mar 2020 23:38:42 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Football</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Free Agents (Sports)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Carolina Panthers</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Newton, Cameron J</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24nfl-cam1/24nfl-cam1-moth.jpg" width="151"/>
<media:credit>Mike Mccarn/Associated Press</media:credit>
<media:description>
Cam Newton, the Panthers’ career leader in passing yards (29,041), passing and rushing touchdowns (182 and 58, respectively) and wins by a quarterback (68), will seek a new team after nine seasons in Carolina.
</media:description>
</item>
<item>
<title>All Alone, Belarus Plays On</title>
<link>
https://www.nytimes.com/2020/03/24/sports/soccer/soccer-belarus-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/soccer/soccer-belarus-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/soccer/soccer-belarus-coronavirus.html" rel="standout"/>
<description>
Every soccer league in Europe has closed down in the face of the coronavirus pandemic except one: the Belarusian Premier League. When the authorities were asked why, they replied, “Why not?”
</description>
<dc:creator>Rory Smith</dc:creator>
<pubDate>Thu, 26 Mar 2020 05:29:21 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Soccer</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Belarus</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24soccer-belarus/24soccer-belarus-moth-v2.jpg" width="151"/>
<media:credit>Tatyana Zenkovich/EPA, via Shutterstock</media:credit>
<media:description>
Social distancing was not an option when Isloch (in blue) beat Neman Grodno on Saturday, part of the opening weekend of the soccer season in Belarus.
</media:description>
</item>
<item>
<title>
Golf Rounds Surged as Coronavirus Advanced. Now the Game Is Retreating.
</title>
<link>
https://www.nytimes.com/2020/03/24/sports/golf/golf-courses-open-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/golf/golf-courses-open-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/golf/golf-courses-open-coronavirus.html" rel="standout"/>
<description>
Drawn by open-air acreage, free time and new social distancing guidelines, recreational golfers in the U.S. were playing in droves this month. Then courses started shuttering.
</description>
<dc:creator>Bill Pennington</dc:creator>
<pubDate>Tue, 24 Mar 2020 13:07:30 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Golf</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United States Golf Assn</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24virus-golf-7/24virus-golf-7-moth-v2.jpg" width="151"/>
<media:credit>Michael Hanson for The New York Times</media:credit>
<media:description>
Playing a round at Indian Creek Golf Course on Saturday.
</media:description>
</item>
<item>
<title>
Mets’ Noah Syndergaard Will Have Tommy John Surgery
</title>
<link>
https://www.nytimes.com/2020/03/24/sports/baseball/noah-syndergaard-tommy-john-surgery.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/baseball/noah-syndergaard-tommy-john-surgery.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/baseball/noah-syndergaard-tommy-john-surgery.html" rel="standout"/>
<description>
Syndergaard is expected to be out until midway through 2021 as he recovers from the operation.
</description>
<dc:creator>Kevin Armstrong</dc:creator>
<pubDate>Wed, 25 Mar 2020 00:02:28 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Sports Injuries</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Baseball</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">New York Mets</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Syndergaard, Noah</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24mets1/24mets1-moth.jpg" width="151"/>
<media:credit>Rich Schultz/Getty Images</media:credit>
<media:description>
Noah Syndergaard pitched in a spring training game on March 8.
</media:description>
</item>
<item>
<title>
Mr. Consistency Leaves New England. No, Not Tom Brady.
</title>
<link>
https://www.nytimes.com/2020/03/24/sports/football/patriots-release-kicker-gostkowski.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/football/patriots-release-kicker-gostkowski.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/football/patriots-release-kicker-gostkowski.html" rel="standout"/>
<description>
The Patriots released their longtime kicker, Stephen Gostkowski, the latest player to depart in their turbulent off-season.
</description>
<dc:creator>Ben Shpigel</dc:creator>
<pubDate>Tue, 24 Mar 2020 22:42:14 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Football</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">New England Patriots</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Gostkowski, Stephen (1984- )</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24nfl-kicker1/24nfl-kicker1-moth.jpg" width="151"/>
<media:credit>Maddie Meyer/Getty Images</media:credit>
<media:description>
The Patriots’ kicker, Stephen Gostkowski, is leaving with the franchise’s scoring record.
</media:description>
</item>
<item>
<title>
Clippers Owner Agrees to Buy the Forum in a Deal With M.S.G.
</title>
<link>
https://www.nytimes.com/2020/03/24/sports/basketball/clippers-dolan-ballmer-msg.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/basketball/clippers-dolan-ballmer-msg.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/basketball/clippers-dolan-ballmer-msg.html" rel="standout"/>
<description>
Steve Ballmer appears to be wrapping up a long dispute with James L. Dolan, the Knicks owner and the chief executive of the Madison Square Garden Company.
</description>
<dc:creator>Marc Stein</dc:creator>
<pubDate>Wed, 25 Mar 2020 01:56:15 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Basketball</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mergers, Acquisitions and Divestitures</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Los Angeles Clippers</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Madison Square Garden Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">New York Knicks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ballmer, Steven A</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Dolan, James L</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/04/24/sports/24nba-arenapromo/24nba-arenapromo-moth-v2.jpg" width="151"/>
<media:credit>Daniel Slim/Agence France-Presse — Getty Images</media:credit>
</item>
<item>
<title>
How the Yankees’ Minor Leaguers Spent 2 Weeks in Quarantine
</title>
<link>
https://www.nytimes.com/2020/03/25/sports/baseball/yankees-quarantine-minor-leaguers.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/sports/baseball/yankees-quarantine-minor-leaguers.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/sports/baseball/yankees-quarantine-minor-leaguers.html" rel="standout"/>
<description>
A positive coronavirus test for a teammate meant every Yankees minor leaguer had to spend two weeks isolated in Florida. They got creative to keep busy and stay in shape.
</description>
<dc:creator>James Wagner</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:30:55 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Baseball</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Minor Leagues</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">New York Yankees</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/sports/25minors-quarantine-1/25minors-quarantine-1-moth.jpg" width="151"/>
<media:credit>Mike Ehrmann/Getty Images</media:credit>
<media:description>
The minor league players and staff for the Yankees — some 175 people in all — were quarantined for two weeks after a 17-year-old pitcher tested positive for the coronavirus.
</media:description>
</item>
<item>
<title>A Year of ‘What If’ for the N.B.A.</title>
<link>
https://www.nytimes.com/2020/03/25/sports/basketball/a-year-of-what-if-for-the-nba.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/sports/basketball/a-year-of-what-if-for-the-nba.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/sports/basketball/a-year-of-what-if-for-the-nba.html" rel="standout"/>
<description>
In this week’s newsletter, Marc Stein discusses the postponement of the Olympics and the basketball connection to his late father.
</description>
<dc:creator>Marc Stein</dc:creator>
<pubDate>Wed, 25 Mar 2020 14:30:06 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Basketball</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Basketball Assn</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24steinnewsletter-lede/24steinnewsletter-lede-moth.jpg" width="151"/>
<media:credit>Ray Stubblebine/Reuters</media:credit>
<media:description>
This summer, Olympic basketball fans will just have to reminisce about The Dream Team, which won gold in Barcelona in 1992. (Left to right: Larry Bird, Scottie Pippen, Michael Jordan, Clyde Drexler.)
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
<title>I.O.C. and Japan Agree to Postpone Tokyo Olympics</title>
<link>
https://www.nytimes.com/2020/03/24/sports/olympics/coronavirus-summer-olympics-postponed.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/olympics/coronavirus-summer-olympics-postponed.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/olympics/coronavirus-summer-olympics-postponed.html" rel="standout"/>
<description>
The decision came after swelling resistance from nations and athletes to holding the Games amid the coronavirus pandemic.
</description>
<dc:creator>Motoko Rich, Matthew Futterman and Tariq Panja</dc:creator>
<pubDate>Wed, 25 Mar 2020 15:19:31 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games (2020)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">International Olympic Committee</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">World Health Organization</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bach, Thomas</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Tokyo (Japan)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Japan</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Abe, Shinzo</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24olympicshp/24hpvirus-tab9-moth.jpg" width="151"/>
<media:credit>Noriko Hayashi for The New York Times</media:credit>
<media:description>
The Tokyo Olympics had been scheduled to begin in late July.
</media:description>
</item>
<item>
<title>
Why Olympic Leaders Clung to the Plan to Have the Summer Games in Tokyo
</title>
<link>
https://www.nytimes.com/2020/03/24/sports/olympics/tokyo-olympics-postponed-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/sports/olympics/tokyo-olympics-postponed-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/sports/olympics/tokyo-olympics-postponed-coronavirus.html" rel="standout"/>
<description>
The International Olympic Committee had said the Tokyo Games would offer hope against the coronavirus this summer, even as sports leaders and medical experts insisted that the event be delayed.
</description>
<dc:creator>Matthew Futterman</dc:creator>
<pubDate>Tue, 24 Mar 2020 13:37:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games (2020)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">International Olympic Committee</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bach, Thomas</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Tokyo (Japan)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/sports/24virus-olybubble/24virus-olybubble-moth.jpg" width="151"/>
<media:credit>Noriko Hayashi for The New York Times</media:credit>
<media:description>
An agreement has been reached to postpone the Olympics for a year.
</media:description>
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
</channel>
  `;

const parser = new DOMParser(); // initialize dom parser
const srcDOM = parser.parseFromString(strxml, "application/xml"); 

//Now we can call DOM methods like GetElementById, etc. on scrDOM.

//Converting DOM Tree to json
console.log(xml2json(srcDOM));