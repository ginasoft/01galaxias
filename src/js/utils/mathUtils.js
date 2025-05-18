export function normalize(value, min, max) {
  return (value - min) / (max - min);
}

export function interpolate(norm, min, max) {
  return min + (max - min) * norm;
}

export function map(value, min1, max1, min2, max2) {
  if (value < min1) value = min1;
  if (value > max1) value = max1;
  return interpolate(normalize(value, min1, max1), min2, max2);
}
