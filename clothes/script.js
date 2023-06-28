const numImages = 100;

for (let i = 1; i <= numImages; i++) {
  const productImage = document.querySelector(`.image${i}`);
  const productHoverImage = document.querySelector(`.image${i + 1}`);

  productImage.addEventListener('mouseenter', function() {
    productImage.style.display = 'none';
    productHoverImage.style.display = 'block';
  });

  productHoverImage.addEventListener('mouseleave', function() {
    productHoverImage.style.display = 'none';
    productImage.style.display = 'block';
  });

  // Increment i by 1 to skip the hover image in the next iteration
  i++;
}


