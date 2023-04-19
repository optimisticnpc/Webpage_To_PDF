import jsPDF from 'jspdf';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'convertToPdf') {
    console.log('Message received: convertToPdf');
    // Extract the text and create a PDF (using an external library)
    const text = document.body.innerText;
    createPdf(text);
  }
});
  
  function createPdf(text) {
    // This function should use a library like jsPDF to create a PDF.
    // You can customize the formatting as desired.
    // Example:
    // https://github.com/MrRio/jsPDF

    const pdf = new jsPDF();
    const lines = pdf.splitTextToSize(text, 180); // Wrap text to fit page width
    pdf.setFontSize(12);
  
    let y = 20;
    for (const line of lines) {
      pdf.text(15, y, line);
      y += 7;
    }
  
    pdf.save('webpage.pdf');
  }
  