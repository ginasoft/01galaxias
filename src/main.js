import * as THREE from 'three';
import { setupScene } from './js/scene/initScene.js';
import { buildTube } from './js/scene/createTube.js';
import { initParticles } from './js/particles.js';
import { initInteractions, cameraRotationProxy } from './js/interaction.js';

const { renderer, scene, cameraGroup, composer } = setupScene();
const { path, light } = buildTube(scene);
initParticles(scene);

import('./js/scrollAnim.js').then(({ setupScroll }) => {
  const cameraPct = setupScroll(cameraGroup, path, light);

  initInteractions(path, cameraPct);
});

(function animate() {
  cameraGroup.rotation.y += (cameraRotationProxy.x - cameraGroup.rotation.y) / 15;
  cameraGroup.rotation.x += (cameraRotationProxy.y - cameraGroup.rotation.x) / 15;

  composer.render();
  requestAnimationFrame(animate);
})();
