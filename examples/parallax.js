(function(){
  const container = document.querySelector('.parallax-container');
  if(!container) return;
  const layers = container.querySelectorAll('.parallax-layer');

  const handleMove = (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth || '0');
      const moveX = (offsetX * depth) / rect.width;
      const moveY = (offsetY * depth) / rect.height;
      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  };

  const handleLeave = () => {
    layers.forEach(layer => {
      layer.style.transform = 'translate3d(0,0,0)';
    });
  };

  container.addEventListener('mousemove', handleMove);
  container.addEventListener('mouseleave', handleLeave);
})();
