import * as THREE from 'three';
import { EffectComposer }  from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass }      from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export function setupScene() {
  const canvas = document.querySelector('canvas.experience');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x194794, 0, 100);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 200);
  const cameraGroup = new THREE.Group();
  cameraGroup.position.z = 400;
  cameraGroup.add(camera);
  scene.add(cameraGroup);


  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    /*strength*/1.5, /*radius*/0.4, /*threshold*/0.85
  ));

  window.addEventListener('resize', () => {
    const { innerWidth: w, innerHeight: h } = window;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    composer.setSize(w, h);
  });

  return { renderer, scene, camera, cameraGroup, composer };
}
