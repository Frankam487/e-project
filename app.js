function toggleImage(imageId) {
  const imageContainer = document.getElementById(imageId);
  if (imageContainer.classList.contains('show')) {
      imageContainer.classList.remove('show');
  } else {
      const allImages = document.querySelectorAll('.image-container');
      allImages.forEach(image => {
          image.classList.remove('show');
      });
      imageContainer.classList.add('show');
  }
}