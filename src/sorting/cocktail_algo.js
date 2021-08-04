export function get_cocktail_animation(array) {
  let animations = [];
  animations = cocktail(array, animations);
  return animations;
}

function cocktail(array, animations) {
  let swapped = true;
  let start = 0;
  let end = array.length - 1;
  while (swapped === true) {
    swapped = false;

    for (let i = start; i < end; ++i) {
      if (array[i] > array[i + 1]) {
        let T = array[i];
        array[i] = array[i + 1];
        array[i + 1] = T;
        animations.push([i, i + 1, "True"]);
        swapped = true;
      }
    }

    if (swapped === false) {
      break;
    }

    swapped = false;
    end = end - 1;

    for (let i = end - 1; i > start - 1; --i) {
      if (array[i] > array[i + 1]) {
        let T = array[i];
        array[i] = array[i + 1];
        array[i + 1] = T;
        animations.push([i, i + 1, "True"]);
        swapped = true;
      }
    }
    start = start + 1;
  }
  return animations;
}
