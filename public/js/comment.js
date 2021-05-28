const commentForm = async function(event) {
    event.preventDefault();
  
    var dID = document.getElementById("design-id");
    const designId = dID.value;
    var commentBody = document.getElementById("comment-body");
    const body = commentBody.value;
    const userId = 1;

    if (body) {
    console.log(body);
      await fetch('/api/comments', {
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
    }
  };
  
  document
    .querySelector('#commentForm')
    .addEventListener('submit', commentForm);
  