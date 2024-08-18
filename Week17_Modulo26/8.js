async function fetchAndDisplayPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
  
      const postList = document.createElement('ul');
      posts.forEach((post) => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        postList.appendChild(listItem);
      });
  
      document.body.appendChild(postList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchAndDisplayPosts();