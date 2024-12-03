document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/downlodePdf/img/ElectricityBill_prog.pdf'; // Change this to the actual path of your PDF
    link.download = 'ElectricityBill_prog.pdf'; // The name of the file to be downloaded
    link.click();
  });

  document.getElementById('downloadBtn2').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/downlodePdf/notes.pdf'; // Change this to the actual path of your PDF
    link.download = 'notes.pdf'; // The name of the file to be downloaded
    link.click();
  });