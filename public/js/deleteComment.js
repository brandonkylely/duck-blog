const deleteComment = async function (event) {
    event.preventDefault();

    const commentIdEl = document.querySelector("")
    const commentId = commentIdEl.getAttribute('data-commentId');
  
    const response = await fetch(`/api/comment/${commentId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete comment");
    }
  };
  
  document.querySelector("").addEventListener("submit", deleteComment);