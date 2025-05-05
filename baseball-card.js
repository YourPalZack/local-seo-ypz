document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const cardContainer = document.querySelector('.card-container');
  const flipButton = document.getElementById('flip-card');
  const uploadButton = document.getElementById('upload-photo');
  const photoInput = document.getElementById('photo-input');
  const photoArea = document.getElementById('photo-area');
  
  // Default silhouette image (base64 encoded gray silhouette)
  const defaultSilhouette = `
    <svg width="100%" height="100%" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#cccccc"/>
      <path d="M150,100 C180,100 200,130 200,160 C200,190 180,220 150,220 C120,220 100,190 100,160 C100,130 120,100 150,100 Z" fill="#888888"/>
      <path d="M70,350 C70,280 110,240 150,240 C190,240 230,280 230,350 L70,350 Z" fill="#888888"/>
    </svg>
  `;
  
  // Set default silhouette
  photoArea.innerHTML = defaultSilhouette;
  
  // Flip card
  flipButton.addEventListener('click', function() {
    cardContainer.classList.toggle('flipped');
  });
  
  // Trigger file input when upload button is clicked
  uploadButton.addEventListener('click', function() {
    photoInput.click();
  });
  
  // Handle photo upload
  photoInput.addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        
        // Clear the photo area and add the new image
        photoArea.innerHTML = '';
        photoArea.appendChild(img);
      };
      
      reader.readAsDataURL(e.target.files[0]);
    }
  });
  
  // Allow drag and drop for images
  photoArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    photoArea.style.border = '3px dashed #e30613';
  });
  
  photoArea.addEventListener('dragleave', function() {
    photoArea.style.border = 'none';
  });
  
  photoArea.addEventListener('drop', function(e) {
    e.preventDefault();
    photoArea.style.border = 'none';
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        
        // Clear the photo area and add the new image
        photoArea.innerHTML = '';
        photoArea.appendChild(img);
      };
      
      reader.readAsDataURL(e.dataTransfer.files[0]);
    }
  });
});
