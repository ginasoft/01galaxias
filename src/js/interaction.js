import { map } from './utils/mathUtils.js';

export let cameraRotationProxy = { x: Math.PI, y: 0 };
export const markers = [];

export function initInteractions(path, cameraPct) {
  document.addEventListener('mousemove', evt => {
    cameraRotationProxy.x = map(evt.clientX, 0, window.innerWidth, 3.24, 3.04);
    cameraRotationProxy.y = map(evt.clientY, 0, window.innerHeight, -0.1, 0.1);
  });

  const canvas = document.querySelector('canvas.experience');
  canvas.addEventListener('click', () => {
    const pct = cameraPct.value;
    const p1 = path.getPointAt(pct);
    markers.push(p1);
    console.log(JSON.stringify(markers));
  });
}
