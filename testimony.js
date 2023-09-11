
document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');
  
    // Fetch user data from the API and populate the table
    // fetch('https://api-zenithmoment.onrender.com/testimony/')
    fetch('https://api-zenithmoment.onrender.com/testimony/')
      .then(response => response.json())
      .then(data => {
        data.forEach((testimony, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td class="py-2 px-4">${index + 1}</td>
            <td class="py-2 px-4">${testimony.name}</td>
            <td class="py-2 px-4">${testimony.display_name}</td>
            <td class="py-2 px-4">${testimony.phone}</td>
            <td class="py-2 px-4">${testimony.testimony}</td>
            <td class="py-2 px-4">${testimony.event_edition}</td>
            <td class="py-2 px-4">${testimony.is_anonymous}</td>
  
          `;
          userTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  
     
  });
  