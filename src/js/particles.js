import * as THREE from 'three';

export function initParticles(scene) {
  const loader = new THREE.TextureLoader();
  const spikey = loader.load('/src/assets/images/spikey.png');
  const pCount = 6800;
  const makeSystem = () => {
    const geom = new THREE.BufferGeometry();
    const pos  = new Float32Array(pCount * 3);
    for(let i=0; i<pCount; i++){
      pos[i*3  ] = Math.random()*500 - 250;
      pos[i*3+1] = Math.random()*10  - 5;
      pos[i*3+2] = Math.random()*500;
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.5, map: spikey,
      transparent: true, blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    return new THREE.Points(geom, mat);
  };

  const sys1 = makeSystem(), sys2 = makeSystem(), sys3 = makeSystem();
  scene.add(sys1, sys2, sys3);

  return { sys1, sys2, sys3 };
}
