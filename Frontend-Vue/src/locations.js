
// Fetch buildings data from the backend
fetch('http://localhost:3000/buildings')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(buildings => {
    // Process the retrieved buildings data
    console.log(buildings);
    // Now you can use the buildings data to render it on your frontend
  })
  .catch(error => {
    console.error('Error fetching buildings:', error);
  });
