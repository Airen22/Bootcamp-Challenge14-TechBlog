const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-name').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();
  
    if (title && post_content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, post_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };

  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };

  document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);