# serviceordermanagementprojectnew
this is designed using Nodejs , Mongoose , Reactjs , Gulp  Mainly

 Building web app using react.js, express.js, node.js and mongodb

Prerequisites
In order to get the most out of this project I myself would suggest you to have some familiarity with node.js, react.js and express.js is expected. 
You need to have node installed in your system, everything else we will install as below.

Project Setup

Command prompt command lines after INSTALLING NODE 

----FOR FRONT END THESE ARE NEEDED ----
1) npm install -g gulp bower nodemon
2) mkdir project
3) npm init
4) bower init
5) npm install --save browserify reactify vinyl-source-stream gulp react react-dom express guid
6) bower install --save bootstrap-css

----FOR BACKEND THESE ARE NEEDED----
7) npm install mongoose --python=python2.7 --save
8) npm install body-parser --save
9) npm install underscore --save 
10) npm install jquery --save
11) npm install es6-promise --save


After all commands are given

most imp command

12) gulp   (this should be given every time we edit our files because it pipes our code into destination folder)

------this one is for mounting the server-------
13) nodemon .\server\server.js

Now please launch your application using following command, and browse http://localhost:7777/index.html but before that lets start our Mongoose db instance first other wise the server wont get started

step1:- open your command prompt

step2:- then type cd c:\program files\mongodb\server\3.4\bin (mongodb default location in c: drive, using above command we going to access) if you are using earlier version 2.0,2.6 means you should follow cd c:\program files\mongodb 2.6 standard\bin

step3:- now you were inside mongodb file location, nxt is to create one new directory using command mkdir data.

-----imp steps----

step4:- type mongod --dbpath data (it will connect to port)

step5:- minimize the current command prompt and open another command prompt with "run as admin"

step6:- then type cd c:\program files\mongodb\server\3.0\bin 

step7:- now type mongo localhost/customerfinder (connect to db server)

------imp steps done here----




go to mongo prompt in downloaded files from mongoose db website

"show dbs" -----first command to show all dbs
"use customerfinder" ------second command to use it as ur db among them
"show collections" -----third command to show collections which means tables in sql but here they means files 
"db.customers.find();" ------to show the entries when you click the submit button .
"show collections" command is use to display the existing collection in db server
"help" for help
 






