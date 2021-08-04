export function get_bubble_animation(array) {
  const animation = [];

  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - i - 1; ++j) {
      if (array[j] > array[j + 1]) {
        let key = array[j + 1];
        array[j + 1] = array[j];
        array[j] = key;
        animation.push([j, j + 1, "True"]);
      } else {
        animation.push([j, j + 1, "False"]);
      }
    }
  }
  console.log(array);
  return animation;
}
