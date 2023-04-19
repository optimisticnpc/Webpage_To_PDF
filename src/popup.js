document.getElementById('convert').addEventListener('click', () => {
  console.log('Convert button clicked');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'convertToPdf' });
  });
});
