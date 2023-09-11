
document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');
  
    // Fetch user data from the API and populate the table
    // fetch('https://api-zenithmoment.onrender.com/testimony/')
    fetch('http://127.0.0.1:3000/feedback/')
      .then(response => response.json())
      .then(data => {
        data.forEach((feedback, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td class="py-2 px-4">${index + 1}</td>
            <td class="py-2 px-4">${feedback.name}</td>
            <td class="py-2 px-4">${feedback.gender}</td>
            <td class="py-2 px-4">${feedback.email}</td>
            <td class="py-2 px-4">${feedback.accomodation}</td>
            <td class="py-2 px-4">${feedback.spirituality}</td>
            <td class="py-2 px-4">${feedback.cordination}</td>
            <td class="py-2 px-4">${feedback.highlight_moment}</td>
            <td class="py-2 px-4">${feedback.recommendation_suggestion}</td>
          `;
          userTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  
     
  });
  