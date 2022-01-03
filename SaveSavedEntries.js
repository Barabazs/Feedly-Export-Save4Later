let convertEntries = () => {
  "use strict";
  let target = [...document.getElementsByClassName("quicklisted")];
  let result = [];
  target.forEach((element) => {
    let regExpLiteral = /Published:.(.*)/i;
    result.push({
      title: element.querySelector(".entry__title").innerHTML,
      url: element.getAttribute("data-alternate-link"),
      summary: element.querySelector(".summary").innerHTML,
      time: regExpLiteral.exec(element.querySelector("span.ago").title)[1],
      sourceTitle: element.querySelector(".entry__source").innerHTML,
      sourceUrl: element.querySelector(".entry__source").href,
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
  URL.revokeObjectURL(blob);
};

saveToFile(convertEntries());
