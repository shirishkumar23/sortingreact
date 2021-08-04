export function get_insertion_animation(array) {
  const animation = [];
  for (let i = 1; i < array.length; ++i) {
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      let key = array[j];
      array[j] = array[j - 1];
      array[j - 1] = key;
      animation.push([j - 1, j, "True"]);
      --j;
    }
    if (j > 0) {
      animation.push([j - 1, j, "False"]);
    }
  }
  return animation;
}
