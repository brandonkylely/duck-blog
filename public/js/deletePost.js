const deletePost = async function (event) {
    event.preventDefault();

    const postIdEl = document.querySelector("")
    const postId = commentIdEl.getAttribute('data-postId');
  
    const response = await fetch(`/api/comment/${postId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete post");
    }
  };
  
  document.querySelector("").addEventListener("submit", deletePost);