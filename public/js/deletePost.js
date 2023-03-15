const deletePost = async function (event) {
    event.preventDefault();

    // const postIdEl = document.querySelector("")
    // const postId = commentIdEl.getAttribute('data-postId');
    const postId = event.target.getAttribute('data-postId');
    console.log(postId);
    // console.log("hello")
  
    const response = await fetch(`/api/post/${postId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  };
  
  document.querySelector(".delete-post-button").addEventListener("click", deletePost);