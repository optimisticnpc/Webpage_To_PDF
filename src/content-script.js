import jsPDF from 'jspdf';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'convertToPdf') {
    console.log('Message received: convertToPdf');
    const content = extractContent();
    createPdf(content);
    }
  });

function extractContent() {
  // Replace the following selectors with the appropriate ones for the websites you're targeting
  const selectors = ['article', 'main', '.entry-content', 'entry-content'];
  // deleted full stop in front of entry-content
  let content = '';

  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) {
      content = element.innerText;
      break;
    }
  }

  return content;
}

function createPdf(text) {
  // This function should use a library like jsPDF to create a PDF.
  // You can customize the formatting as desired.
  // Example:
  // https://github.com/MrRio/jsPDF
  console.log('Creating PDF');
  const pdf = new jsPDF();
  const lines = pdf.splitTextToSize(text, 180); // Wrap text to fit page width
  pdf.setFontSize(12);

  const lineHeight = 7;
  const pageHeight = pdf.internal.pageSize.height - 40; // Subtract margins (20 top + 20 bottom)
  let y = 20;

  for (const line of lines) {
    if (y + lineHeight > pageHeight) {
      pdf.addPage();
      y = 20;
    }

    pdf.text(15, y, line);
    y += lineHeight;
  }

  pdf.save('webpage.pdf');
}
