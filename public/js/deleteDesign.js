const designId = document.querySelector('input[name="design-id"]').value;




const deleteClickHandler = async function() {
    await fetch(`/api/designs/${designId}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/dashboard');
  };



  document
  .querySelector('#deleteBtn')
  .addEventListener('click', deleteClickHandler);
