export function get_heap_animation(array) {
  let animations = [];
  animations = heapsort(array, animations);
  return animations;
}
function heapify(array, n, i, animations) {
  let largst = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && array[i] < array[l]) {
    largst = l;
  }

  if (r < n && array[largst] < array[r]) {
    largst = r;
  }
  if (largst !== i) {
    const T = array[i];
    array[i] = array[largst];
    array[largst] = T;
    animations.push([i, largst, "True"]);
    heapify(array, n, largst, animations);
  }
}
function heapsort(array, animations) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; --i) {
    heapify(array, array.length, i, animations);
  }

  for (let i = array.length - 1; i > 0; --i) {
    const T = array[i];
    array[i] = array[0];
    array[0] = T;
    animations.push([0, i, "True"]);
    heapify(array, i, 0, animations);
  }
  return animations;
}
