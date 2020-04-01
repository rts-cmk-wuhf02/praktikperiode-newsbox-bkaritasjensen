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
	<title>NYT &gt; Top Stories</title>
	<link>https://www.nytimes.com</link>
	<atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/H
	<description></description>
	<language>en-us</language>
	<copyright>Copyright 2020 The New York Times Company</copyright
	<lastBuildDate>Wed, 25 Mar 2020 06:55:55 +0000</lastBuildDate>
	<pubDate>Wed, 25 Mar 2020 06:55:55 +0000</pubDate>
	<image>
	  <title>NYT &gt; Top Stories</title>
	  <url>https://static01.nyt.com/images/misc/NYT_logo_rss_250x40
	  <link>https://www.nytimes.com</link>
	</image>
	<item>
	  <title>Coronavirus Live Updates: White House and Congress Rea
	  <link>https://www.nytimes.com/2020/03/25/world/coronavirus-ne
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/25/w
	  <atom:link href="https://www.nytimes.com/2020/03/25/world/cor
	  <description>The legislation, which will send direct payments
	  <pubDate>Wed, 25 Mar 2020 06:49:53 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>The New York Times</media:credit>
	</item>
	<item>
	  <title>Stock Markets in Asia Continue Global Surge: Live Upda
	  <link>https://www.nytimes.com/2020/03/25/business/stock-marke
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/25/b
	  <atom:link href="https://www.nytimes.com/2020/03/25/business/
	  <description>Live updates on stock market and business news d
	  <pubDate>Wed, 25 Mar 2020 06:31:02 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Anna Moneymaker/The New York Times</media:credi
	  <media:description>Mitch McConnell, the Senate majority leade
	</item>
	<item>
	  <title>Slow Response to the Coronavirus Measured in Lost Oppo
	  <link>https://www.nytimes.com/2020/03/24/us/politics/coronavi
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/u
	  <atom:link href="https://www.nytimes.com/2020/03/24/us/politi
	  <description>If the administration had reacted to the ventila
	  <dc:creator>David E. Sanger, Zolan Kanno-Youngs and Ana Swans
	  <pubDate>Wed, 25 Mar 2020 02:35:38 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Stephanie Keith for The New York Times</media:c
	  <media:description>The federal government supplied 400 ventil
	</item>
	<item>
	  <title>What I Learned When My Husband Got Sick With Coronavir
	  <link>https://www.nytimes.com/2020/03/24/magazine/coronavirus
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/m
	  <atom:link href="https://www.nytimes.com/2020/03/24/magazine/
	  <description>Our world became one of isolation, round-the-clo
	  <dc:creator>Jessica Lustig</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 22:56:00 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Photo illustration by Delcan &amp; Co.</media:c
	</item>
	<item>
	  <title>Free Access to Coronavirus Coverage</title>
	  <link>https://www.nytimes.com/news-event/coronavirus</link>
	  <guid isPermaLink="true">https://www.nytimes.com/news-event/c
	  <atom:link href="https://www.nytimes.com/news-event/coronavir
	  <description>The Times is providing free access to our most i
	  <dc:creator>The New York Times</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 06:23:56 +0000</pubDate>
	</item>
	<item>
	  <title>Coronavirus in N.Y.: ‘Astronomical’ Surge Leads to Qua
	  <link>https://www.nytimes.com/2020/03/24/nyregion/coronavirus
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/n
	  <atom:link href="https://www.nytimes.com/2020/03/24/nyregion/
	  <description>The White House advised people who have passed t
	  <dc:creator>Alan Feuer and Brian M. Rosenthal</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 02:01:33 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Stephanie Keith for The New York Times</media:c
	  <media:description>New York is projected to need up to 140,00
	</item>
	<item>
	  <title>How Andrew Cuomo, New York Governor, Became the Politi
	  <link>https://www.nytimes.com/2020/03/24/nyregion/governor-an
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/n
	  <atom:link href="https://www.nytimes.com/2020/03/24/nyregion/
	  <description>With his coronavirus briefings, Gov. Andrew Cuom
	  <dc:creator>Jesse McKinley and Shane Goldmacher</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 01:41:55 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Mike Segar/Reuters</media:credit>
	</item>
	<item>
	  <title>Subway Service Is Cut by a Quarter Because of Coronavi
	  <link>https://www.nytimes.com/2020/03/24/nyregion/coronavirus
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/n
	  <atom:link href="https://www.nytimes.com/2020/03/24/nyregion/
	  <description>A staggering loss of ridership hits the subway s
	  <dc:creator>Christina Goldbaum</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 00:30:59 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Stephanie Keith for The New York Times</media:c
	  <media:description>Subway stations are nearly deserted, with 
	</item>
	<item>
	  <title>Coronavirus Has Hospitals in Desperate Need of Equipme
	  <link>https://www.nytimes.com/video/us/100000007046207/corona
	  <guid isPermaLink="true">https://www.nytimes.com/video/us/100
	  <atom:link href="https://www.nytimes.com/video/us/10000000704
	  <description>Health care workers are facing a serious shortag
	  <dc:creator>Haley Willis, Robin Stein, Natalie Reneau and Dre
	  <pubDate>Wed, 25 Mar 2020 03:48:56 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	</item>
	<item>
	  <title>A Medical Class ‘Minted by the Pandemic’</title>
	  <link>https://www.nytimes.com/2020/03/24/health/medical-schoo
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/h
	  <atom:link href="https://www.nytimes.com/2020/03/24/health/me
	  <description>Across the nation, medical students are graduati
	  <dc:creator>Emma Goldberg</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 04:23:04 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Stephen Speranza for The New York Times</media:
	  <media:description>David Edelman, a fifth-year medical studen
	</item>
	<item>
	  <title>Some Doctors Stockpile Trial Coronavirus Drugs for The
	  <link>https://www.nytimes.com/2020/03/24/business/doctors-buy
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/b
	  <atom:link href="https://www.nytimes.com/2020/03/24/business/
	  <description>The stockpiling has become so worrisome that pha
	  <dc:creator>Ellen Gabler</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 22:41:41 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Ramin Rahimian for The New York Times</media:cr
	  <media:description>A handful of state pharmacy boards have is
	</item>
	<item>
	  <title>Coronavirus in India: Modi Orders Total Lockdown of 21
	  <link>https://www.nytimes.com/2020/03/24/world/asia/india-cor
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/w
	  <atom:link href="https://www.nytimes.com/2020/03/24/world/asi
	  <description>With four hours’ notice, India’s prime minister 
	  <dc:creator>Jeffrey Gettleman and Kai Schultz</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 04:08:55 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Anupam Nath/Associated Press</media:credit>
	  <media:description>A family watching Prime Minister Narendra 
	</item>
	<item>
	  <title>Britain Locks Down to Stem the Coronavirus. More or Le
	  <link>https://www.nytimes.com/2020/03/24/world/europe/britain
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/w
	  <atom:link href="https://www.nytimes.com/2020/03/24/world/eur
	  <description>A day of confusion and contradictory images as B
	  <dc:creator>Mark Landler and Stephen Castle</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 22:22:51 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Andrew Testa for The New York Times</media:cred
	  <media:description>A few shops remained open in an otherwise 
	</item>
	<item>
	  <title>Coronavirus in Europe: Thousands of Health Workers Out
	  <link>https://www.nytimes.com/2020/03/24/world/europe/coronav
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/w
	  <atom:link href="https://www.nytimes.com/2020/03/24/world/eur
	  <description>The thinning ranks of doctors and nurses, partic
	  <dc:creator>Raphael Minder and Elian Peltier</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 21:21:48 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Samuel Aranda for The New York Times</media:cre
	  <media:description>Healthcare workers outside of a hospital i
	</item>
	<item>
	  <title>Facebook Is ‘Just Trying to Keep the Lights On’ as Tra
	  <link>https://www.nytimes.com/2020/03/24/technology/virus-fac
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/t
	  <atom:link href="https://www.nytimes.com/2020/03/24/technolog
	  <description>The social network is straining to deal with sky
	  <dc:creator>Mike Isaac and Sheera Frenkel</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 21:59:12 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Jason Henry for The New York Times</media:credi
	  <media:description>Facebook’s 45,000 employees have been aske
	</item>
	<item>
	  <title>Coronavirus Spurs a Wave of Suspect Websites Looking t
	  <link>https://www.nytimes.com/2020/03/24/business/coronavirus
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/b
	  <atom:link href="https://www.nytimes.com/2020/03/24/business/
	  <description>Hundreds of e-commerce sites are popping up dail
	  <dc:creator>Michael H. Keller and Taylor Lorenz</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 14:23:33 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:description>Shopify has registered nearly 500 new e-co
	</item>
	<item>
	  <title>Drivers Say Uber and Lyft Are Blocking Unemployment Pa
	  <link>https://www.nytimes.com/2020/03/24/business/economy/cor
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/b
	  <atom:link href="https://www.nytimes.com/2020/03/24/business/
	  <description>States like New York and California have made gi
	  <dc:creator>Noam Scheiber</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 00:54:20 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Jessica Pons for The New York Times</media:cred
	  <media:description>Jerome Gage, a Lyft driver in Los Angeles 
	</item>
	<item>
	  <title>The Complicated Calculus of Helping Neighbors During a
	  <link>https://www.nytimes.com/2020/03/24/nyregion/ny-coronavi
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/n
	  <atom:link href="https://www.nytimes.com/2020/03/24/nyregion/
	  <description>In the coronavirus crisis, kind gestures like pi
	  <dc:creator>Annie Correal</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 02:37:24 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Laylah Amatullah Barrayn for The New York Times
	  <media:description>Clark Hamel, 24, is staying inside his fou
	</item>
	<item>
	  <title>Terrence McNally, Tony-Winning Playwright of Gay Life,
	  <link>https://www.nytimes.com/2020/03/24/theater/terrence-mcn
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/t
	  <atom:link href="https://www.nytimes.com/2020/03/24/theater/t
	  <description>Mr. McNally, who died of coronavirus complicatio
	  <dc:creator>Jesse Green and Neil Genzlinger</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 03:38:56 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Fred R. Conrad/The New York Times</media:credit
	  <media:description>The playwright Terrence McNally in 2014. H
	</item>
	<item>
	  <title>3 of the Busiest National Parks Close Amid Coronavirus
	  <link>https://www.nytimes.com/2020/03/24/us/coronavirus-natio
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/u
	  <atom:link href="https://www.nytimes.com/2020/03/24/us/corona
	  <description>Yellowstone, Grand Teton and the Great Smoky Mou
	  <dc:creator>Neil Vigdor</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 03:26:32 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Josh Haner/The New York Times</media:credit>
	  <media:description>A tourist taking photographs of Castle Gey
	</item>
	<item>
	  <title>Coronavirus, Olympics, Canned Tomatoes: Your Tuesday E
	  <link>https://www.nytimes.com/2020/03/24/briefing/coronavirus
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/b
	  <atom:link href="https://www.nytimes.com/2020/03/24/briefing/
	  <description>Here’s what you need to know at the end of the d
	  <dc:creator>Remy Tumin and Hiroko Masuike</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 22:26:15 +0000</pubDate>
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Doug Mills/The New York Times</media:credit>
	</item>
	<item>
	  <title>Why the American Approach Is Failing</title>
	  <link>https://www.nytimes.com/2020/03/24/podcasts/the-daily/c
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/p
	  <atom:link href="https://www.nytimes.com/2020/03/24/podcasts/
	  <description>“Shelter in place” orders and the closing of bus
	  <pubDate>Tue, 24 Mar 2020 09:56:15 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit> Todd Heisler/The New York Times</media:credit>
	  <media:description>Times Square in New York on Thursday.</med
	</item>
	<item>
	  <title>From the Archives: Robert Caro on How He Does It</titl
	  <link>https://www.nytimes.com/2020/03/20/books/review/20podca
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/20/b
	  <atom:link href="https://www.nytimes.com/2020/03/20/books/rev
	  <description>The acclaimed biographer of Lyndon Johnson and R
	  <pubDate>Fri, 20 Mar 2020 16:44:03 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	</item>
	<item>
	  <title>Sign Up: ‘Coronavirus Briefing’</title>
	  <link>https://www.nytimes.com/newsletters/coronavirus-briefin
	  <guid isPermaLink="true">https://www.nytimes.com/newsletters/
	  <atom:link href="https://www.nytimes.com/newsletters/coronavi
	  <description>An informed guide to the global outbreak.</descr
	  <dc:creator>The New York Times</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 20:24:37 +0000</pubDate>
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>The New York Times</media:credit>
	</item>
	<item>
	  <title>Coronavirus Is Advancing. All Americans Need to Shelte
	  <link>https://www.nytimes.com/2020/03/24/opinion/coronavirus-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/c
	  <description>The worst of the pandemic is yet to come. Listen
	  <dc:creator>The Editorial Board</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 23:43:45 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Maddie McGarvey for The New York Times</media:c
	</item>
	<item>
	  <title>7 Medical Leaders to Politicians: Save Lives, Not Wall
	  <link>https://www.nytimes.com/2020/03/24/opinion/social-dista
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/s
	  <description>Don’t open businesses and schools. The economy w
	  <dc:creator>J. Larry Jameson</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 02:03:22 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Jeenah Moon for The New York Times</media:credi
	  <media:description>Hudson Street in Greenwich Village, normal
	</item>
	<item>
	  <title>I Followed the U.K.’s Advice. Did I Spread Coronavirus
	  <link>https://www.nytimes.com/2020/03/25/opinion/coronavirus-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/25/o
	  <atom:link href="https://www.nytimes.com/2020/03/25/opinion/c
	  <description>The symptoms are not as straightforward as Boris
	  <dc:creator>Abigail Tarttelin</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 05:00:06 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Dan Kitwood/Getty Images</media:credit>
	  <media:description>London’s Westminster Bridge on Tuesday.</m
	</item>
	<item>
	  <title>Trump to New York: Drop Dead</title>
	  <link>https://www.nytimes.com/2020/03/24/opinion/trump-nyc-co
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/t
	  <description>Untold thousands will likely die, absent federal
	  <dc:creator>Jennifer Senior</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 00:38:02 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Eduardo Munoz/Reuters</media:credit>
	</item>
	<item>
	  <title>To Prevent a Coronavirus Depression, Will Trump Trade 
	  <link>https://www.nytimes.com/2020/03/24/opinion/coronavirus-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/c
	  <description>Will he, given his obsession with the economy?</
	  <dc:creator>Frank Bruni</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 23:21:18 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Doug Mills/The New York Times</media:credit>
	  <media:description>President Trump on his way to the White Ho
	</item>
	<item>
	  <title>Finding the ‘Common Good’ in a Pandemic</title>
	  <link>https://www.nytimes.com/2020/03/24/opinion/covid-ethics
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/c
	  <description>The Harvard political philosopher Michael Sandel
	  <dc:creator>Thomas L. Friedman</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 23:54:44 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Samuel Aranda for The New York Times</media:cre
	  <media:description>Health care workers in Spain responding to
	</item>
	<item>
	  <title>I’m on the Front Lines. I Have No Plan for This.</titl
	  <link>https://www.nytimes.com/2020/03/24/opinion/coronavirus-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/c
	  <description>We’re not allowing visitors in the I.C.U. My pat
	  <dc:creator>Daniela J. Lamas</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 21:59:28 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Ron Chapple/The Image Bank, via Getty Images Pl
	</item>
	<item>
	  <title>Trump Doesn’t Have the Attention Span to Fight Coronav
	  <link>https://www.nytimes.com/2020/03/24/opinion/coronavirus-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/c
	  <description>He already seems to be losing interest. Look els
	  <dc:creator>Gail Collins and Bret Stephens</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 09:00:16 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Mark Lennihan/Associated Press</media:credit>
	</item>
	<item>
	  <title>Will Our Most Important Industry Survive the Coronavir
	  <link>https://www.nytimes.com/2020/03/24/opinion/tech-compani
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/t
	  <description>Better than you might think. Governments need Bi
	  <dc:creator>Kara Swisher</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 00:26:53 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Carlo Allegri/Reuters</media:credit>
	  <media:description>As more consumers turn to online delivery 
	</item>
	<item>
	  <title>Coronavirus Advice from a Grocery Store Worker</title>
	  <link>https://www.nytimes.com/2020/03/24/opinion/grocery-stor
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/g
	  <description>Be kind. Don’t let the weight of your grief and 
	  <dc:creator>Dylan Morrison</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 19:03:57 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Westend61/Getty Images</media:credit>
	</item>
	<item>
	  <title>After Coronavirus, Will We Have an America Without Res
	  <link>https://www.nytimes.com/2020/03/24/opinion/coronavirus-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/o
	  <atom:link href="https://www.nytimes.com/2020/03/24/opinion/c
	  <description>If businesses like ours don’t get help from Wash
	  <dc:creator>Andrew Carmellini, Tom Colicchio, Danny Meyer, Mi
	  <pubDate>Tue, 24 Mar 2020 17:16:51 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Damon Winter/The New York Times</media:credit>
	  <media:description>The Daily Provisions cafe on the Upper Wes
	</item>
	<item>
	  <title>What to Watch, Read and Listen To During Your Coronavi
	  <link>https://www.nytimes.com/article/coronavirus-quarantine-
	  <guid isPermaLink="true">https://www.nytimes.com/article/coro
	  <atom:link href="https://www.nytimes.com/article/coronavirus-
	  <description>You’re staying home and you need a distraction. 
	  <dc:creator>The New York Times</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 19:40:42 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:description>From left, “The Good Place,” “Bluey” and “
	</item>
	<item>
	  <title>Livestreaming the Seattle Symphony Became a Source of 
	  <link>https://www.nytimes.com/2020/03/24/magazine/coronavirus
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/m
	  <atom:link href="https://www.nytimes.com/2020/03/24/magazine/
	  <description>The live performance wasn’t really live, but it 
	  <dc:creator>Brooke Jarvis</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 18:49:44 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	</item>
	<item>
	  <title>Great Leadership in a Time of Crisis</title>
	  <link>https://www.nytimes.com/2020/03/24/books/review/great-l
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/b
	  <atom:link href="https://www.nytimes.com/2020/03/24/books/rev
	  <description>Books from the past show us how John Kennedy, Fr
	  <dc:creator>Jon Meacham</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 14:52:12 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Ralph Crane/The LIFE Picture Collection, via Ge
	  <media:description>People watch as John Kennedy announces a b
	</item>
	<item>
	  <title>Bernie Sanders Plans to Participate in Next Debate, Ca
	  <link>https://www.nytimes.com/2020/03/24/us/politics/biden-sa
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/u
	  <atom:link href="https://www.nytimes.com/2020/03/24/us/politi
	  <description>It was the strongest sign yet that he plans to k
	  <dc:creator>Sydney Ember and Reid J. Epstein</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 01:11:03 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Erin Schaff/The New York Times</media:credit>
	  <media:description>Senator Bernie Sanders at the debate in Wa
	</item>
	<item>
	  <title>Texas Tries to Balance Local Control With the Threat o
	  <link>https://www.nytimes.com/2020/03/24/us/coronavirus-texas
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/u
	  <atom:link href="https://www.nytimes.com/2020/03/24/us/corona
	  <description>Texas is the largest state that has not issued a
	  <dc:creator>Manny Fernandez and David Montgomery</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 02:16:35 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Evan Vucci/Associated Press</media:credit>
	  <media:description>Lt. Gov. Dan Patrick of Texas, center, wit
	</item>
	<item>
	  <title>Spring Breaker Who Said, &#39;If I Get Corona, I Get C
	  <link>https://www.nytimes.com/2020/03/24/us/coronavirus-brady
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/u
	  <atom:link href="https://www.nytimes.com/2020/03/24/us/corona
	  <description>A beachgoer whose defiance of social distancing 
	  <dc:creator>Aimee Ortiz</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 00:05:03 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="">spring break</category>
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Saul Martinez for The New York Times</media:cre
	  <media:description>College students at a bar in Fort Lauderda
	</item>
	<item>
	  <title>Jeremy Marre, Documentarian of World Music, Is Dead at
	  <link>https://www.nytimes.com/2020/03/23/arts/music/jeremy-ma
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/23/a
	  <atom:link href="https://www.nytimes.com/2020/03/23/arts/musi
	  <description>With a minimal camera and sound crew, Mr. Marre 
	  <dc:creator>Jon Pareles</dc:creator>
	  <pubDate>Mon, 23 Mar 2020 15:44:08 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	</item>
	<item>
	  <title>Greta Thunberg Says It’s ‘Extremely Likely’ That She H
	  <link>https://www.nytimes.com/2020/03/24/climate/greta-thunbe
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/c
	  <atom:link href="https://www.nytimes.com/2020/03/24/climate/g
	  <description></description>
	  <dc:creator>Somini Sengupta</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 00:06:05 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Virginia Mayo/Associated Press</media:credit>
	  <media:description>Greta Thunberg at a meeting of the Europea
	</item>
	<item>
	  <title>Women Should be Eligible for US Military Draft</title>
	  <link>https://www.nytimes.com/2020/03/24/us/women-military-dr
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/u
	  <atom:link href="https://www.nytimes.com/2020/03/24/us/women-
	  <description>A commission appointed by Congress will recommen
	  <dc:creator>Sarah Mervosh and John Ismay</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 20:56:59 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Melissa Golden for The New York Times</media:cr
	  <media:description>Army cadets at a training exercise in Colu
	</item>
	<item>
	  <title>2020 Primary and Election: Has the Coronavirus Postpon
	  <link>https://www.nytimes.com/2020/03/24/us/politics/coronavi
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/u
	  <atom:link href="https://www.nytimes.com/2020/03/24/us/politi
	  <description>Primary elections are being pushed back. The Oly
	  <dc:creator>Matt Flegenheimer</dc:creator>
	  <pubDate>Wed, 25 Mar 2020 01:10:54 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Maddie McGarvey for The New York Times</media:c
	  <media:description>Aaron Sellers cleaned a voting machine in 
	</item>
	<item>
	  <title>Golf Rounds Surged as Coronavirus Advanced. Now the Ga
	  <link>https://www.nytimes.com/2020/03/24/sports/golf/golf-cou
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/s
	  <atom:link href="https://www.nytimes.com/2020/03/24/sports/go
	  <description>Drawn by open-air acreage, free time and new soc
	  <dc:creator>Bill Pennington</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 13:07:30 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Michael Hanson for The New York Times</media:cr
	  <media:description>Playing a round at Indian Creek Golf Cours
	</item>
	<item>
	  <title>Turning Back the Clock on Aging Cells</title>
	  <link>https://www.nytimes.com/2020/03/24/science/aging-dna-ep
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/s
	  <atom:link href="https://www.nytimes.com/2020/03/24/science/a
	  <description>Researchers report that they can rejuvenate huma
	  <dc:creator>Nicholas Wade</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 14:08:03 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>David Scharf/Science Source</media:credit>
	  <media:description>A scanning electron micrograph of a human 
	</item>
	<item>
	  <title>Why Mundane Moments Truly Matter</title>
	  <link>https://www.nytimes.com/2020/03/23/smarter-living/why-m
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/23/s
	  <atom:link href="https://www.nytimes.com/2020/03/23/smarter-l
	  <description>“How we spend our days is how we spend our lives
	  <dc:creator>Simran Sethi</dc:creator>
	  <pubDate>Mon, 23 Mar 2020 23:05:10 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Lissa Jensen</media:credit>
	  <media:description>An entry from Lissa Jensen’s journal, writ
	</item>
	<item>
	  <title>How to Stay Sane When the World Seems Crazy</title>
	  <link>https://www.nytimes.com/2020/03/23/smarter-living/coron
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/23/s
	  <atom:link href="https://www.nytimes.com/2020/03/23/smarter-l
	  <description>Stop and take a breath. The world will keep spin
	  <dc:creator>Allie Volpe</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 02:00:02 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Simone Noronha</media:credit>
	</item>
	<item>
	  <title>9 Delightful Articles to Help You Get Through This Wee
	  <link>https://www.nytimes.com/2020/03/23/smarter-living/9-del
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/23/s
	  <atom:link href="https://www.nytimes.com/2020/03/23/smarter-l
	  <description>We’re all just trying to do our best now. These 
	  <dc:creator>Tim Herrera</dc:creator>
	  <pubDate>Mon, 23 Mar 2020 14:41:29 +0000</pubDate>
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Rose Wong</media:credit>
	</item>
	<item>
	  <title>Burnout Isn’t Just in Your Head. It’s in Your Circumst
	  <link>https://www.nytimes.com/2020/03/19/smarter-living/coron
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/19/s
	  <atom:link href="https://www.nytimes.com/2020/03/19/smarter-l
	  <description>We can fight emotional exhaustion by decreasing 
	  <dc:creator>Adam Grant</dc:creator>
	  <pubDate>Fri, 20 Mar 2020 13:49:27 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Dominic Kesterton</media:credit>
	</item>
	<item>
	  <title>A Boston E.R. Doctor&#39;s Poem About the Coronavirus<
	  <link>https://www.nytimes.com/2020/03/24/us/coronavirus-docto
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/u
	  <atom:link href="https://www.nytimes.com/2020/03/24/us/corona
	  <description>A Boston emergency room doctor’s battle of words
	  <dc:creator>Karen Weise</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 20:24:26 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	</item>
	<item>
	  <title>Review: ‘One Day at a Time’ Still Standing and Being C
	  <link>https://www.nytimes.com/2020/03/23/arts/television/one-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/23/a
	  <atom:link href="https://www.nytimes.com/2020/03/23/arts/tele
	  <description>The former Netflix sitcom about a Cuban-American
	  <dc:creator>James Poniewozik</dc:creator>
	  <pubDate>Mon, 23 Mar 2020 16:31:03 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Nicole Wilder/Pop Tv</media:credit>
	  <media:description>The Alvarez family is back after a brush w
	</item>
	<item>
	  <title>A D.I.Y. Dance for Your Home, From Yvonne Rainer</titl
	  <link>https://www.nytimes.com/2020/03/24/arts/dance/yvonne-ra
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/a
	  <atom:link href="https://www.nytimes.com/2020/03/24/arts/danc
	  <description>The venerated choreographer invites you to try “
	  <dc:creator>Brian Seibert</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 20:03:34 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	</item>
	<item>
	  <title>Tiny Love Stories: ‘You Find Yourself Lying Once Again
	  <link>https://www.nytimes.com/2020/03/24/style/tiny-modern-lo
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/s
	  <atom:link href="https://www.nytimes.com/2020/03/24/style/tin
	  <description>Modern Love in miniature, featuring reader-submi
	  <pubDate>Tue, 24 Mar 2020 22:54:44 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Brian Rea</media:credit>
	</item>
	<item>
	  <title>Carolina Releases Cam Newton, Completes Housecleaning<
	  <link>https://www.nytimes.com/2020/03/24/sports/football/cam-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/s
	  <atom:link href="https://www.nytimes.com/2020/03/24/sports/fo
	  <description>The quarterback, a former league M.V.P., was the
	  <dc:creator>Ben Shpigel</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 23:38:42 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Mike Mccarn/Associated Press</media:credit>
	  <media:description>Cam Newton, the Panthers’ career leader in
	</item>
	<item>
	  <title>What Does Our Body Temperature Say About Our Health?</
	  <link>https://www.nytimes.com/2020/03/24/magazine/fever-body-
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/24/m
	  <atom:link href="https://www.nytimes.com/2020/03/24/magazine/
	  <description>Humans seem to have cooled over the past 150 yea
	  <dc:creator>Kim Tingley</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 15:14:52 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	</item>
	<item>
	  <title>Thalidomide Use Did Happen Here, These Americans Say</
	  <link>https://www.nytimes.com/2020/03/23/health/thalidomide-d
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/23/h
	  <atom:link href="https://www.nytimes.com/2020/03/23/health/th
	  <description>They believe they were harmed in the thalidomide
	  <dc:creator>Katie Thomas</dc:creator>
	  <pubDate>Mon, 23 Mar 2020 15:32:27 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Audra Melton for The New York Times</media:cred
	</item>
	<item>
	  <title>Young Adults Come to Grips With Coronavirus Health Ris
	  <link>https://www.nytimes.com/2020/03/20/health/coronavirus-m
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/20/h
	  <atom:link href="https://www.nytimes.com/2020/03/20/health/co
	  <description>It can be a serious disease for younger people, 
	  <dc:creator>Roni Caryn Rabin</dc:creator>
	  <pubDate>Fri, 20 Mar 2020 14:15:04 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Brandon Thibodeaux for The New York Times</medi
	</item>
	<item>
	  <title>Vampire Bats Know Sharing Blood With Friends Is Good M
	  <link>https://www.nytimes.com/2020/03/19/science/vampire-bats
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/19/s
	  <atom:link href="https://www.nytimes.com/2020/03/19/science/v
	  <description>After a good blood meal, one bat will share with
	  <dc:creator>James Gorman</dc:creator>
	  <pubDate>Thu, 19 Mar 2020 18:31:17 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Ben Lascelles/Nature Picture Library, via Alamy
	  <media:description>A tight-knit vampire bat community in a ho
	</item>
	<item>
	  <title>Trump Has Given Unusual Leeway to Fauci, but Aides Say
	  <link>https://www.nytimes.com/2020/03/23/us/politics/coronavi
	  <guid isPermaLink="true">https://www.nytimes.com/2020/03/23/u
	  <atom:link href="https://www.nytimes.com/2020/03/23/us/politi
	  <description>The president has become increasingly concerned 
	  <dc:creator>Maggie Haberman</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 04:09:48 +0000</pubDate>
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <category domain="http://www.nytimes.com/namespaces/keywords/
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>Al Drago for The New York Times</media:credit>
	  <media:description>President Trump knows that Dr. Anthony S. 
	</item>
	<item>
	  <title>Try Tiles</title>
	  <link>https://www.nytimes.com/puzzles/tiles</link>
	  <guid isPermaLink="true">https://www.nytimes.com/puzzles/tile
	  <atom:link href="https://www.nytimes.com/puzzles/tiles" rel="
	  <description>Our soothing matching game may help you de-stres
	  <dc:creator>The New York Times</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 00:44:17 +0000</pubDate>
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>The New York Times</media:credit>
	</item>
	<item>
	  <title>The Crossword, Vertex and More</title>
	  <link>https://www.nytimes.com/crosswords</link>
	  <guid isPermaLink="true">https://www.nytimes.com/crosswords</
	  <atom:link href="https://www.nytimes.com/crosswords" rel="sta
	  <description>Solve the daily puzzle edited by Will Shortz, or
	  <dc:creator>The New York Times</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 00:44:17 +0000</pubDate>
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>The New York Times</media:credit>
	</item>
	<item>
	  <title>Try Spelling Bee</title>
	  <link>https://www.nytimes.com/puzzles/spelling-bee</link>
	  <guid isPermaLink="true">https://www.nytimes.com/puzzles/spel
	  <atom:link href="https://www.nytimes.com/puzzles/spelling-bee
	  <description>Puzzle throughout the day to see how many words 
	  <dc:creator>The New York Times</dc:creator>
	  <pubDate>Tue, 24 Mar 2020 00:44:17 +0000</pubDate>
	  <media:content height="151" medium="image" url="https://stati
	  <media:credit>The New York Times</media:credit>
	</item>
  </channel>`;

const parser = new DOMParser(); // initialize dom parser
const srcDOM = parser.parseFromString(strxml, "application/xml"); 

//Now we can call DOM methods like GetElementById, etc. on scrDOM.

//Converting DOM Tree to json
console.log(xml2json(srcDOM));

const DOMContent = xml2json(srcDOM);

document.querySelector(".test").innerText = DOMContent.channel.title;