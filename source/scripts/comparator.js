document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const before = document.querySelector('.image-before');
  const container = document.querySelector('.comparator-container');
  let isDragging = false;

  function updateImageSizes() {
    const containerWidth = container.offsetWidth;
    before.style.width = `${containerWidth / 2}px`;
  }

  updateImageSizes();
  window.addEventListener('resize', updateImageSizes);

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    let x = e.clientX - containerRect.left;

    x = Math.max(0, Math.min(x, containerRect.width));

    const percent = (x / containerRect.width) * 100;
    before.style.width = `${percent}%`;
    slider.style.left = `${percent}%`;
  });

  slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    let x = e.touches[0].clientX - containerRect.left;

    x = Math.max(0, Math.min(x, containerRect.width));

    const percent = (x / containerRect.width) * 100;
    before.style.width = `${percent}%`;
    slider.style.left = `${percent}%`;
  });
});
