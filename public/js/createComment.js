const submitComment = async function (event) {
    // event.preventDefault();

    // const postId = document.querySelector(".comment-button").dataset.postId;
    const postId = this.dataset.postId;
    const newCommentBody = document.querySelector("#new-comment-body");
    console.log(postId);
    console.log(newCommentBody);
  
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postId: postId,
        body: newCommentBody.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post");
    }
  };
  
  document.querySelector(".new-comment-form").addEventListener("submit", submitComment);