document.getElementById('convert').addEventListener('click', () => {
  console.log('Convert button clicked');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'convertToPdf' });
  });
});


// This code was integrated without using GPT4!
// Idk how it works tho
document.querySelector("#about").addEventListener("click", function () {
  window.open("https://github.com/optimisticnpc/Webpage_To_PDF");
});