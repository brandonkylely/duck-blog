const submitPost = async function(event) {
    // event.preventDefault();
  
    const newPostTitle = document.querySelector('#new-post-title');
    const newPostBody = document.querySelector('#new-post-body');
  
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        title: newPostTitle.value.trim(),
        body: newPostBody.value.trim(),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('#submit-post-button')
    .addEventListener('submit', submitPost);