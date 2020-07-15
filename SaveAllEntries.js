let convertEntries = () => {
    "use strict";
    let target = [...document.getElementsByClassName("entry")];
    let result = [];
    target.forEach((element) => {
        let regExpLiteral = /Published:.(.*)/i;
        result.push({
            title: element.getAttribute("data-title"),
            url: element.getAttribute("data-alternate-link"),
            summary: element.querySelectorAll(".summary")[0].innerHTML,
            time: regExpLiteral.exec(element.querySelectorAll("span.ago")[0].title)[1],
            sourceTitle: element.querySelectorAll(".source")[0].innerHTML,
            sourceUrl: element.querySelectorAll(".source")[0].href,
        });
    });
    return result;
};

let saveToFile = (input) => {
    "use strict";
    let json = JSON.stringify(input, undefined, 2);
    let blob = new Blob([json], { type: "text/plain;charset=utf-8" });
    let downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    let fileName = "FeedlySavedForLater" + Date.now().toString() + ".json";
    downloadLink.download = fileName;
    downloadLink.click();
    URL.revokeObjectURL(a.href);
};

saveToFile(convertEntries());
