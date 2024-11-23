// Example control module structure
export function setupControls(cube) {
  document.getElementById('rotateX').addEventListener('click', () => {
    cube.rotation.x += 0.1;
  });
  document.getElementById('rotateY').addEventListener('click', () => {
    cube.rotation.y += 0.1;
  });
  document.getElementById('reset').addEventListener('click', () => {
    cube.rotation.set(0, 0, 0);
  });
}
