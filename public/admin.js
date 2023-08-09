document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('adminLoginForm');
  
    adminLoginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const password = document.getElementById('password').value;
  
      // Check the password for authentication
      if (password === 'sofadmin101') {
        // Redirect to the admin dashboard
        window.location.href = '/admin-dashboard';
      } else {
        alert('Invalid password. Please try again.');
      }
    });
  });
  