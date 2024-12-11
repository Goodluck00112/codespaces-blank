const container = document.querySelector('.circle-container');
const dotCount = 30; // Number of dots

for (let i = 0; i < dotCount; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  
  const angle = (360 / dotCount) * i; // Spacing the dots
  const x = 120 * Math.cos((angle * Math.PI) / 180);
  const y = 120 * Math.sin((angle * Math.PI) / 180);

  dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  container.appendChild(dot);
}
