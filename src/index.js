// Import the necessary Three.js modules
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up the camera controls
let controls;
controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;
controls.update();

// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create edges geometry for vertices
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
const lineSegments = new THREE.LineSegments(edges, lineMaterial);
scene.add(lineSegments);

// Position the cube in the center of the screen
cube.position.set(0, 0, 0);

// Move the camera back to see the cube
camera.position.z = 5;

// Create a render loop to continuously render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01; 
  cube.rotation.z += 0.01;

  // Rotate the edges
  lineSegments.rotation.x += 0.01;
  lineSegments.rotation.y += 0.01;
  lineSegments.rotation.z += 0.01;

  renderer.render(scene, camera);
}
animate();
