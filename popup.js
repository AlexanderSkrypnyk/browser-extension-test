text.onchange = () => {/*здесь доступ по id без селектора*/
  chrome
    .runtime
    .sendMessage({ text: text.value }); /*отправили полученные данные с инпута в background*/
};

chrome.storage.local.get('value', ({value}) => {
  text.value = value;
});