Test the app live at https://edushare-frontend.herokuapp.com/
This is the front end of the web app . This is made by react and distributed over a lot of files .
The main Page is App.js and Home.js,Several Routes are set here . In the app.js Signin , Register and Home pages are set and an user is reverted to the home if and only if s/he provides the correct details which is checked by the database through backend . All the main code files are present in the src folder .
 The App.js contains Signin.js(It contains the functions and methods of the signin page) , register.js(It contains the functions and methods of the signin page)
 Additionally the App.js contains routes to files like adds.js and queries.js . The add.js is basically for the page of posting adds and queries.js is the page for posting questions for the Student Forum . 

The Home.js is the file for the main body of the webapp . It contains the JSX code for the header and all the pages of this app is routed from here .
This contains files like homebody.js(For the main content of the first page), adpage.js(For the content of the page of viewing ads), myads.js(For the contents of the page of viewing my ads), querypage.js(For the contents of the page of Students Forum) , year.js(For the contents of the page showing the respective years of each department) , myres.js(For the contents of the page of My Resources ie it lista all the resources uploaded by you) , myreport.js(For the contents of the page My reports , this is the page where you will get details of each and every reports against your uploads) , myans.js(For the contents of the page of my answers , ie the answers posted by me in the student forum) , replies.js(This page contains the replies given by users in response to our adds)

There are some important files which need to be mentioned :
i> resource.js - This file contains the resource page and it provides the option for file uploading  , it connects to the firebase cloud storage .
ii> report.js - This file contains the report formand also the involved functions .
iii> search/searchz.js - These files contain the methods and functions of the seacrch box which in uesd in the See ads page and as well as the Student forum .
iv> card/cardz/pcardz/qcards/rcard/rcardz/mcard/acard - These are all the files for displaying different card formats used in the app . They all contain the JSX codes . These cards are for ads,my ads,myqueries,queries,my reports, my replies, my answers respectively / answers .
v> eventpage.js - This contains the events section of the Home page ie . The placement/internship/webinar section .
vi>pageview.js - A container file for containing the ad cards for the ads page .
vii> querypage/qview.js - These are container page for the questions and posts of the students forum .
viii> anspost.js - This is page for the input for posting answers . 
ix> allans.js - It is a container for the answer cards to a particular question in the answers page .
x>firebase.js - It contains all the details about the firebase authorization .
xi>rview.js - For displaying individual resources and the view / report/ delete function .

Some spam filters we used :
i> No user can post the same ad or question twice . This removes the chance of spamming of same ads or question again and again .
ii> An user can post a maximum of 10 question at once . If s/he wants to add more s/he may delete previous questions . This removes chances of question spamming / posting cringe questions .
iii> There is an option of report against any cringe content uploaded in the resources .
iv> Nobody can delete uploaded by others .
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
