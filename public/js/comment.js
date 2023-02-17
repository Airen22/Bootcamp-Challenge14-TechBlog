const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('#comment-content').value.trim();
    const comment_post_id = document.querySelector('') 
  
    if (comment_content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_content, }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("hello")
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);