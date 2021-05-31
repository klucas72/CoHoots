const submitBtn = document.getElementById("formInput");

const uploadDesign = async (event) => {
  event.preventDefault();
  //   console.log(submitBtn);
  const price = document.querySelector("#price-input").value.trim();
  const fileData = document.querySelector("#input-files").files[0];
  // Replacing the already existing form data with our own
  const form = new FormData();
  // Creating a form that could handle both the multipart encryption data AND the json for the price
  console.log(fileData);
  form.append("fileData", fileData);
  form.append("price", price);
  if (price && fileData) {
    const response = await fetch("/api/designs", {
      method: "POST",
      // replacing body with form and since the header is automatically generated, it isn't needed
      body: form,
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

submitBtn.addEventListener("submit", uploadDesign);
