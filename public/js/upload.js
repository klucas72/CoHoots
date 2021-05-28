const submitBtn = document.getElementById("submit-upload");

const uploadDesign = async (event) => {
  event.preventDefault();
  //   console.log(submitBtn);
  const price = document.querySelector("#price-input").value.trim();

  if (price) {
    const response = await fetch("/api/designs", {
      method: "POST",
      body: JSON.stringify({ price }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to upload");
    }
  }
};

submitBtn.addEventListener("click", uploadDesign);
