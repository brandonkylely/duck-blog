const previousPage = async function (event) {
    // event.preventDefault();
    // alert("something")
    const response = await fetch(`/api/post/previous`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to go previous");
    }
  };
  
  document.querySelector("#previous-page-button").addEventListener("click", previousPage);