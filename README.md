# Feedly-Export-Save4Later

Simple script that exports a users "Saved For Later" list out of Feedly
as a JSON string.
This was intended for use in the Google Chrome's "Inspector" tool so your
 mileage may vary if used in other contexts.

Format of JSON is as follows:
[
{
title: "Title",
url: "www.example.com/title",
time: "Sunday "
}
]

# How to use:
1) Open up Google Chrome
2) Login to Feedly and go to the "Saved For Later" list.
3) Keep scrolling down the page until all saved documents have been loaded
4) Right click on the page and select "Inspect Element"
5) Inside the "Inspector" tool, click the "Console" tab.
6) Paste the script below into the console

NOTE: You must switch off SSL (http rather than https) or jQuery won't load!
Feedly doesn't use jQuery so firstly inject it into the page


Forked from [BradCrawford](https://gist.github.com/bradcrawford/7288411) and updated thanks to ShockwaveNN & Dexnero
