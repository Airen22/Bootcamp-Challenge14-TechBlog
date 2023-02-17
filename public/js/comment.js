    const comment_post_id = document.location.href.split("/")[4]
      console.log(comment_post_id)
      
      const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('#comment-content').value.trim();

  
    if (comment_content) {

      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_content, comment_post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("hello")
        console.log(document.location.href.split("/")[4])
        // document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);