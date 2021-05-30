const submitBtn = document.getElementById("upload-btn");

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

// Inserting image
$(document).ready(function () {
  let imagesPreview = function (input, placeToInsertImagePreview) {
    if (input.files) {
      let filesAmount = input.files.length;
      for (i = 0; i < filesAmount; i++) {
        let reader = new FileReader();
        reader.onload = function (event) {
          $($.parseHTML("<img>"))
            .attr("src", event.target.result)
            .appendTo(placeToInsertImagePreview);
        };
        reader.readAsDataURL(input.files[i]);
      }
    }
  };
  $("#input-files").on("change", function () {
    imagesPreview(this, "div.preview-images");
  });
});

submitBtn.addEventListener("click", uploadDesign);
