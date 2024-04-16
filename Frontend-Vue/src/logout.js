// logout function to be called from all pages after logging in

/* will be adjusted when the server is created */
function logout() {
   
    fetch('/logout', {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
      if (response.ok) {
        // Clear session data
        sessionStorage.clear();

        // Redirect to home page
        window.location.href = "index.html";
      } else {
        console.error('Failed to logout:', response.status);
        // Handle error condition
    }
    })
    .catch(error => {
      console.error('Error during logout:', error);
      // Handle network errors 
    });
  }
  