document.addEventListener('DOMContentLoaded', () => {
  // Fetch user data from the API and populate the table
  // Fetch user data from the API and populate the table
fetch('http://127.0.0.1:3000/users/users')
.then(response => response.json())
.then(data => {
  const userTableBody = document.getElementById('userTableBody');
  const table = document.querySelector('table');

  // Populate the table with user data
  data.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="py-2 px-4">${index + 1}</td>
      <td class="py-2 px-4">${user.fullName}</td>
      <td class="py-2 px-4">${user.email}</td>
      <td class="py-2 px-4">${user.phonenumber}</td>
      <td class="py-2 px-4">${user.gender}</td>
      <td class="py-2 px-4">${user.pickup_point}</td>
      <td class="py-2 px-4">${user.expected_arrival_date}</td>
      <td class="py-2 px-4">${user.department}</td>
      <td class="py-2 px-4">${user.referral_code}</td>
    `;
    userTableBody.appendChild(row);
  });

  // Set up event listener for PDF download button
  const downloadButton = document.getElementById('downloadPDF');
  if (downloadButton) {
    downloadButton.addEventListener('click', () => {
      const pdf = new jsPDF();
      const table = document.querySelector('table');
      const tableData = [];

      // Convert table rows to an array of arrays
      table.querySelectorAll('tr').forEach(row => {
        const rowData = [];
        row.querySelectorAll('th, td').forEach(cell => {
          rowData.push(cell.textContent);
        });
        tableData.push(rowData);
      });

      // Set column headers for the PDF
      const headers = tableData.shift();
      const headerString = headers.join('\t');

      // Set table data for the PDF
      const dataString = tableData.map(row => row.join('\t')).join('\n');

      // Add content to PDF
      pdf.text(headerString, 10, 10);
      pdf.setFontSize(10);
      pdf.text(dataString, 10, 20);

      // Save PDF
      pdf.save('table.pdf');
    });
  } else {
    console.error('Download PDF button not found.');
  }
})
.catch(error => {
  console.error('Error fetching user data:', error);
});
})