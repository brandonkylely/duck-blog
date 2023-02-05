const submitPost = async function (event) {
  // event.preventDefault();

  const newPostTitle = document.querySelector("#new-post-title");
  const newPostBody = document.querySelector("#new-post-body");

  const response = await fetch("/api/post", {
    method: "POST",
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

document.querySelector(".new-post-form").addEventListener("submit", submitPost);

