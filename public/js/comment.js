const commentForm = async function (event) {
  var dID = document.getElementById("design-id");
  const designId = dID.value;
  var commentBody = document.getElementById("comment-body");
  const comment = commentBody.value;

  await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      designId: designId,
      comment: comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.reload();
};

document.querySelector("#commentForm").addEventListener("submit", commentForm);
