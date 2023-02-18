const newPostFormHandler = async (event) => {
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

  const delPostButtonHandler = async (event) => {
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

  const editPostButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/posts/${id}`, {
        method: 'GET',
      });

  console.log(document.querySelector("#post-name").value=response.title)
      if (response.ok) {
        document.querySelector("#post-name").value=`${post.title}}`
      } else {
        alert('Failed to edit post');
      }
    }
  };
  // fetch(`/api/posts/${id}`, {
      //         method: 'GET',
      //       }).then(data => {
      //         data.json()
      //       }).then(res => {
      //         console.log(res)
      //       })
  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostFormHandler);

  document
  .querySelector('#edit-btn')
  .addEventListener('click', editPostButtonHandler);

  document
  .querySelector('#del-btn')
  .addEventListener('click', delPostButtonHandler);