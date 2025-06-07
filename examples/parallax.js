(function () {
  const container = document.querySelector('.parallax-container');
  if (!container) return;
  const layers = container.querySelectorAll('.parallax-layer');

  let rafId;

  const handleMove = (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = container.getBoundingClientRect();
      const width = rect.width || 1;
      const height = rect.height || 1;
      const offsetX = e.clientX - rect.left - width / 2;
      const offsetY = e.clientY - rect.top - height / 2;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || '0');
        const moveX = (offsetX * depth) / width;
        const moveY = (offsetY * depth) / height;
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });
  };

  const handleLeave = () => {
    if (rafId) cancelAnimationFrame(rafId);
    layers.forEach((layer) => {
      layer.style.transform = 'translate3d(0,0,0)';
    });
  };

  container.addEventListener('mousemove', handleMove);
  container.addEventListener('mouseleave', handleLeave);
})();
