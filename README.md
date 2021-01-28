# Feedly-Export-Save4Later

Simple script that exports a users "Saved For Later" list or all loaded entries in a feed out of Feedly as a JSON string.  
This was intended for use in the Google Chrome's "Inspector" tool so your mileage may vary if used in other contexts.
The scripts should work in most modern browsers.

The format of JSON is as follows:

```json
[
    {
        "title": "Title",
        "url": "https://www.example.com/title",
        "summary": "Short summary",
        "time": " Wed, 15 Jul 2020 18:08:22 GMT",
        "sourceTitle": "Example Source",
        "sourceUrl": "https://www.example.com"
    }
]
```

# How to use:

1. Open up your browser.
2. Login to Feedly and go to the "Saved For Later" list or any other feedpage.
3. Keep scrolling down the page until all saved documents have been loaded
4. Right click on the page and select "Inspect Element"
5. Inside the "Inspector" tool, click the "Console" tab.
6. Paste the appropriate script into the console

# Scripts

[SaveSavedEntries.js](SaveSavedEntries.js): use for "Saved For Later"  
[SaveAllEntries.js](SaveAllEntries.js): use for any other page

# Thank you

[BradCrawford](https://gist.github.com/bradcrawford/7288411) for the original snippet. [fkneist](https://github.com/fkneist) and [daun](https://github.com/daun) for the contribution.

ShockwaveNN, Dexnero, selcukakbas & nazgul6 for their input.

# Support

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T51XKUJ)
