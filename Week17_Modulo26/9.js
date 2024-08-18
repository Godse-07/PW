async function fetchWithErrorHandling() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMessage);
    }
  }
  
  fetchWithErrorHandling();