const designId = document.querySelector('input[name="design-id"]').value;


const formHandler = async function(event) {
  event.preventDefault();

  await fetch(`/api/post/${designId}`, {
    method: 'DELETE',
  });
  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};


document
  .querySelector('#delete-btn')
  .addEventListener('click', formHandler);


