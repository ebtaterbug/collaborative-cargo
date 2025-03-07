async function comment(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
  
    const user_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          user_id,
          comment_text
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        window.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}

window.scrollTo(0,document.body.scrollHeight);

document.querySelector('.comment-form').addEventListener('submit', comment);