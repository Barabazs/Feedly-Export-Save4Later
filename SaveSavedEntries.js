let convertEntries = () => {
  "use strict";
  let target = [...document.getElementsByClassName("list-entries")];
  let result = [];
  target.forEach((element) => {
    let regExpLiteral = /Published:.(.*)/i;
    result.push({
      title: element.querySelector(".EntryTitle").innerText,
      url: element.querySelector("a:not(.EntryMetadataSource)").href,
      summary: element.querySelector(".EntrySummary").innerText,
      time: regExpLiteral.exec(element.querySelector("span.ago").title)[1],
      sourceTitle: element.querySelector(".EntryMetadataSource").innerText,
      sourceUrl: element.querySelector(".EntryMetadataSource").href,
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
