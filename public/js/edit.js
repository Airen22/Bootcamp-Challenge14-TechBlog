const editPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-name').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();
  
    if (title && post_content) {
      const response = await fetch('/api/edit', {
        method: 'PUT',
        body: JSON.stringify({ title, post_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to edit post');
      }
    }
  };

//   const editPostButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/edit/${id}`, {
//         method: 'PUT',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to edit post');
//       }
//     }
//   };
  document
  .querySelector('#sub-edit')
  .addEventListener('click', editPostFormHandler);