
const designId = document.querySelector('input[name="design-id"]').value;
const deleteBtn = document.getElementById('deleteBtn');

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


deleteBtn.addEventListener('click', formHandler);


