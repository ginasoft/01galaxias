// src/js/scene/createTube.js
import * as THREE from 'three';

export function buildTube(scene) {
  const raw = [
    [10, 89, 0], [50, 88, 10], [232, 36, 0]
  ];
  const points = raw.map(p => new THREE.Vector3(p[0], p[2], p[1]));
  const path = new THREE.CatmullRomCurve3(points);
  path.tension = 0.5;

  const geoOuter = new THREE.TubeGeometry(path, 300, 4, 32, false);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load(
    '/src/assets/images/3d_space_5.jpg',
    t => {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(15, 2);
    }
  );
  const bumpMap = texLoader.load(
    '/src/assets/images/waveform-bump3.jpg',
    t => {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(15, 2);
    }
  );
  const matOuter = new THREE.MeshPhongMaterial({
    side: THREE.BackSide,
    map: texture,
    bumpMap: bumpMap,
    bumpScale: -0.03,
    shininess: 20,
    specular: 0x0b2349
  });
  const tube = new THREE.Mesh(geoOuter, matOuter);
  scene.add(tube);

  const geoInner = new THREE.TubeGeometry(path, 150, 3.4, 32, false);
  const edges   = new THREE.EdgesGeometry(geoInner);
  const matLine = new THREE.LineBasicMaterial({ opacity: 0.2, transparent: true, linewidth: 2 });
  const wire   = new THREE.LineSegments(edges, matLine);
  scene.add(wire);

  const light = new THREE.PointLight(0xffffff, 0.35, 4);
  light.castShadow = true;
  scene.add(light);

  return { path, light };
}
