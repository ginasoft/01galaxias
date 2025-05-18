import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { map } from './utils/mathUtils.js';

gsap.registerPlugin(ScrollTrigger);

export function setupScroll(cameraGroup, path, light) {
  const cameraPct = { value: 0 };

  function updateCam(p) {
    const p1 = path.getPointAt(p);
    const p2 = path.getPointAt(p + 0.03);
    cameraGroup.position.copy(p1);
    cameraGroup.lookAt(p2);
    light.position.copy(p2);
  }

  gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollTarget',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 5,
      markers: false
    }
  }).to(cameraPct, {
    value: 0.96,
    ease: 'none',
    onUpdate() {
      updateCam(cameraPct.value);
    }
  });

  return cameraPct;
}
