// fetch-users.js
// import generatePDF from "./pdf-generator";

document.addEventListener('DOMContentLoaded', () => {
  const userTableBody = document.getElementById('userTableBody');

  // Fetch user data from the API and populate the table
  fetch('https://api-zenithmoment.onrender.com/users/users')
    .then(response => response.json())
    .then(data => {
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
          <td class="py-2 px-4">${user.expectations}</td>

          <!-- Add more table data cells here -->
        `;
        userTableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });

    generatePDFButton.addEventListener('click', () => {
      const users = Array.from(userTableBody.querySelectorAll('tr')).map(row => {
        const cells = row.querySelectorAll('td');
        return {
          fullName: cells[1].textContent,
          email: cells[2].textContent,
          // Add more properties as needed
        };
      });
  
      generatePDF(users);
    });
});
