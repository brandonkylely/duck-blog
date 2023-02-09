const editPost = async function (event) {
    // event.preventDefault();
    const postId = event.target.getAttribute('data-postId');
    console.log(postId);
    const newPostTitle = document.querySelector("#edit-post-title");
    const newPostBody = document.querySelector("#edit-post-body");
  
    const response = await fetch(`/api/post/put/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: newPostTitle.value,
        body: newPostBody.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to post");
    }
  };
  
  document.querySelector(".edit-post-form").addEventListener("submit", editPost);