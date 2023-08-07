document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');
  
    // Fetch user data from the API and populate the table
    fetch('https://api-zenithmoment.onrender.com/users/users')
      .then(response => response.json())
      .then(data => {
        data.forEach((user, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.phonenumber}</td>
            <!-- Add more columns as needed -->
          `;
          userTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  });
  