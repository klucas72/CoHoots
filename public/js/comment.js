const designEl = $("#design");

designEl.click((e) => {
  let theTarget = e.target;
  // console.log(theTarget);
  $("button").click(() => {
    let body = $(theTarget).val();
    const designId = theTarget.dataset.id;

    fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        designId,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
  });
});
