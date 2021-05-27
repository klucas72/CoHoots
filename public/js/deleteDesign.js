const designId = document.querySelector('#design-id').value;

const deleteDesignHandler = async function() {
  await fetch(`/api/designs/${designId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};


document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteDesignHandler);


