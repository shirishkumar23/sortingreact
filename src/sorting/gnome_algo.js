export function get_gnome_animation(array) {
  let animations = [];
  animations = gnome(array, animations);
  return animations;
}

function gnome(array, animations) {
  let idx = 0;
  while (idx < array.length) {
    if (idx === 0) {
      idx = idx + 1;
    }
    if (array[idx] >= array[idx - 1]) {
      idx = idx + 1;
    } else {
      const T = array[idx];
      array[idx] = array[idx - 1];
      array[idx - 1] = T;

      animations.push([idx, idx - 1, "True"]);
      idx = idx - 1;
    }
  }
  console.log(array);
  return animations;
}
