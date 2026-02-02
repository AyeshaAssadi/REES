function openModal(image, title) {
    document.getElementById('imageModal').style.display = 'flex';
    document.getElementById('modalImg').src = image;
    document.getElementById('modalTitle').innerText = title;
  }
  
  function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
  }
  