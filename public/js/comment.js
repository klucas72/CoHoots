const designEl = $("#design");




designEl.click((e) => {
  let theTarget = e.target;

  $("button").click(() => {
    let body = $(theTarget).val();
    alert(`Body: ${body}`);
    const designId = theTarget.dataset.id;
    alert(`Design ID: ${designId}`);
    let userId = 1;
    alert(`User ID: ${userId}`);

     fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
          designId,
          userId,
          body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.location.reload();
  })
})

    
  
  