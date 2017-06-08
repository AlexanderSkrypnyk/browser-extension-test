/*Здесь идет манипуляция в DOM с полученными данными*/
chrome.extension.connect();

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.text)
});
