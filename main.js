// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// Set up the camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
const container = document.getElementById('renderer');
const width = container.clientWidth;
const height = container.clientHeight;

renderer.setSize(width, height);
container.appendChild(renderer.domElement); // Add canvas to the document

// Add a simple cube
const geometry = new THREE.BoxGeometry(); // Cube geometry
const material = new THREE.MeshBasicMaterial({ color: 0xe10606 }); // Green color
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 5;

function updateRendererSize() {
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  renderer.setSize(width, height);
  camera.aspect = width / height; // Update aspect ratio
  camera.updateProjectionMatrix();
}

// Listen to window resize
window.addEventListener('resize', updateRendererSize);

// Initial size setup
updateRendererSize();

// Animation loop
function animate() {
  requestAnimationFrame(animate); // Call animate recursively

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera); // Render the scene from the camera perspective
}

animate(); // Start the animation loop
