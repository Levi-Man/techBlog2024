const submitComment = async () => {
    const commentContent = document.getElementById('comment').value.trim();

    if (commentContent) {
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ comment: commentContent }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Refresh the page or update comments dynamically
          location.reload();
        } else {
          alert('Failed to add comment');
        }
      } catch (error) {
        console.error('Error submitting comment:', error);
        alert('An error occurred while adding the comment');
      }
    }
  };