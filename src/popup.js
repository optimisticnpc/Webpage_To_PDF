document.getElementById('convert').addEventListener('click', () => {
  console.log('Convert button clicked');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'convertToPdf' });
  });
});

document.getElementById('convert').addEventListener('click', () => {
  const errorElement = document.getElementById('error');
  errorElement.style.display = 'none';

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'convertToPdf' }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        errorElement.style.display = 'block';
        
        // Hide the error message after one second
        setTimeout(() => {
          errorElement.style.display = 'none';
        }, 1000);
      }
    });
  });
});


// This code was integrated without using GPT4!
// Idk how it works tho
document.querySelector("#about").addEventListener("click", function () {
  window.open("https://github.com/optimisticnpc/Webpage_To_PDF");
});




