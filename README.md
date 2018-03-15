# Feedly-Export-Save4Later

Simple script that exports a users "Saved For Later" list or all loaded entries in a feed out of Feedly as a JSON string.   
This was intended for use in the Google Chrome's "Inspector" tool so your mileage may vary if used in other contexts.  

Format of JSON is as follows:
[  
{  
title: "Title",  
url: "www.example.com/title",  
summary: "Short summary",  
time: "Sunday "  
}  
]  

# How to use:
1) Open up Google Chrome
2) Login to Feedly and go to the "Saved For Later" list or any other feedpage.
3) Keep scrolling down the page until all saved documents have been loaded
4) Right click on the page and select "Inspect Element"
5) Inside the "Inspector" tool, click the "Console" tab.
6) Paste the appropriate script into the console

# Scripts
"Save Saved Entries": use for "Saved For Later"  
"Save All Entries": use for any other page  


NOTE: You must switch off SSL (http rather than https) or jQuery won't load!  
Feedly doesn't use jQuery so firstly inject it into the page  


Forked from [BradCrawford](https://gist.github.com/bradcrawford/7288411) and updated thanks to ShockwaveNN & Dexnero.
