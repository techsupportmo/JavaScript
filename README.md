# JavaScript
 A couple of projects I have made using JavaScript :weary: :sweat_drops: :fire:

 <br/>
 
 ## Projects
 - [International Space Station (ISS) Map](#international-space-station-iss-map)
 - [World Temperature](#World-Temperature-earth_americas)

 <br/>

 In some circles, Apple’s iOS operating system has long been considered the more secure of the two operating systems. Why? Apple’s operating system is a closed system. Apple doesn’t release its source code to app developers, and the owners of iPhones and iPads can't modify the code on their phones themselves. This makes it more difficult for hackers to find vulnerabilities on iOS-powered devices.

Android devices are the opposite, relying on an open-source code, meaning that the owners of these devices can tinker with their phone’s and tablet’s operating systems. Too much tinkering, and owners might create a weakness in their devices’ security. Then there are manufacturers themselves. If a phone maker puts out a new device with a modification to the Android operating system and there’s a vulnerability in that code, hackers will find it.

Android is more often targeted by hackers, too, because the operating system powers so many mobile devices today. The global popularity of the Android operating system makes it a more attractive target for cybercriminals. Android devices, then, are more at risk of the malware and viruses that these criminals unleash.

But this doesn’t tell the entire story. While iOS may be considered more secure, it’s not impossible for cybercriminals to hit iPhones or iPads. The owners of both Android and iOS devices need to be aware of possible malware and viruses, and be careful when downloading apps from third-party app stores. It’s safest to download apps from trusted sources, such as Google Play and the Apple App Store, which vet the apps they sell.

Then there are the social engineering attacks in which cybercriminals attempt to trick users into giving up log-in information, access to bank accounts, and other personal data. It doesn't matter what mobile operating system you are using: both iOS and Android can be equally vulnerable to these types of phishing attacks.

<br/>

# International Space Station (ISS) Map

Add description here

In order to create this project, I had to fetch data from a particular endpoint of the <a href="https://wheretheiss.at/w/developer">Where Is The ISS At? REST API </a>. This allowed me to access real-time data about the International Space Station, which I converted to JSON format. After that, I destructured the data into two seperate variables, latitude and longitude, and redisplayed it onto the webpage.

<br/>

API Documentation
![](ISS-Map/images/endpoint.png)

JSON
![](ISS-Map/images/json.png)

Latitude and Longitude printed on the webpage, as well as the console
![](ISS-Map/images/lat_and_lon.png)


<br/>

 # World Temperature :earth_americas:
 This program uses Chart.js in order to display an interactive graph with the average world temperatures in Celsius from 1880 to 2020

This project involves
- Loading CSV file
    - This was done by retrieving a .csv file with the zonal annual means of Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies from 1880-present. 
    - This dataset was retrieved <a href="https://data.giss.nasa.gov/gistemp/">here</a>
- Manual parsing
    - The dataset was parsed by using JavaScript functions like slice() and split() in order to extract the year and the global annual mean
- Chart.js
    - This library allowed me to display the dataset using an interactive graph
    - More info about Chart.js be found <a href="https://www.chartjs.org/">here</a>
- HTML5 Canvas
- Modifying chart style
    - Many elements of the chart can be changed, and Chart.js allowed me to specifically customize the graph in terms of the type of graph it is (ie bar graph, line graph, pie graph), background color, border color, and x and y labels.

<br/>

The Global Average Temperature in C° displayed as a line graph


![](World-Temperature/images/full-graph.png)

The same line graph with the data, along with the console printing the values that were extracted from the .csv file.

![](World-Temperature/images/line.png)

A different way to look at the data would be with a bar graph, which doesn't display the Global Average Temperature, but the difference from the Global Mean, which is roughly 14° Celcius. This data was found <a href="https://earthobservatory.nasa.gov/world-of-change/global-temperatures"> here</a>

![](World-Temperature/images/bar.png)


<br/>

