module.exports = function longestConsecutiveLength(array) {
  const collection = new Set();
  let count = 0;
  const len = array.length;

  for (let i = 0; i < len; i += 1) {
    collection.add(array[i]);
  }

  for (let i = 0; i < len; i += 1) {
    if (!collection.has(array[i] - 1)) {
      let j = array[i];

      while (collection.has(j)) {
        j += 1;
      }

      if (count < j - array[i]) {
        count = j - array[i];
      }
    }
  }

  return count;
};
