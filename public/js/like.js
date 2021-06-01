$(".like-toggle").on("submit", async function () {
  const designId = $(this).closest("form").attr("data-name");

  await fetch("/api/likes", {
    method: "POST",
    body: JSON.stringify({ designId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.reload();
});

$(".like-del").on("submit", async function () {
  const designId = $(this).closest("form").attr("data-name");

  await fetch("/api/likes", {
    method: "DELETE",
    body: JSON.stringify({ designId }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.reload();
});
