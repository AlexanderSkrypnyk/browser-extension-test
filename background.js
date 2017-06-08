/*Здесь идет обработка данных*/
let sendMessage = (newText) => {
  chrome.tabs.query(
    {
      active: true
    },
    tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {
        "text": newText
      });
    });
};


chrome.extension.onConnect.addListener(() => {
  sendMessage(value);
});

chrome
  .runtime
  .onMessage
  .addListener((request, sender, sendResponse) => {
    saveChanges(request.text);
    sendMessage(request.text);
  });

let value = '';
chrome.storage.local.get('value', (theValue) => {
  value = theValue.value;
});

function saveChanges(theValue) {
  /*сохранили данные в storage Chrom-a*/
  if (!theValue) {
    return;
  }
  chrome.storage.local.set({ 'value': theValue }, function () {});
}