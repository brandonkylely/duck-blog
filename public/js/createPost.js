const createPost = async function(event) {
    event.preventDefault();
  
    const newPostTitle = document.querySelector('#');
    const newPostBody = document.querySelector('#');
  
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        title: newPostTitle.value.trim(),
        body: newPostBody.value.trim(),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('#')
    .addEventListener('submit', createPost);