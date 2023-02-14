const nextPage = async function (event) {
    // event.preventDefault();
    // alert("something")
    const response = await fetch(`/api/post/next`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to go next");
    }
  };
  
  document.querySelector("#next-page-button").addEventListener("click", nextPage);
