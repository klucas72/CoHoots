const designEl = $("#design");




designEl.click((e) => {
  let theTarget = e.target;

  $("button").click(() => {
    let body = $(theTarget).val();
    const designId = theTarget.dataset.id;
    // WARNING ----- THE userId IS CURRENTLY HARD-CODED
    let userId = 4;

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

    
  
  