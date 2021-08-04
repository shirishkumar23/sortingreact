export function get_quick_animation(array, low, high) {
  let animations = [];
  animations = quicksort(array, low, high, animations);
  return animations;
}
function quicksort(array, low, high, animations) {
  if (low < high) {
    let i = low - 1;
    const pivot = array[high];
    for (let j = low; j < high; ++j) {
      if (array[j] < pivot) {
        i = i + 1;
        const T = array[i];
        array[i] = array[j];
        array[j] = T;
        animations.push([j, i, "True"]);
      }
    }
    const T = array[i + 1];
    array[i + 1] = array[high];
    array[high] = T;
    animations.push([i + 1, high, "True"]);
    let pi = i + 1;
    quicksort(array, low, pi - 1, animations);
    quicksort(array, pi + 1, high, animations);
  }
  return animations;
}
