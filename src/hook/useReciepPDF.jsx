import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const useReceiptPDF = () => {
  const [pdf, setPdf] = useState(null);

  const generatePDF = (id) => {
    const input = document.getElementById(id);
    html2canvas(input,{ logging: true, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'cm', 'a5',);
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      setPdf(pdf);
    });
  };

  const downloadPDF = () => {
    if (pdf) {
      pdf.save('recibo.pdf');
    }
  };

  return { generatePDF, downloadPDF };
};

export default useReceiptPDF;
