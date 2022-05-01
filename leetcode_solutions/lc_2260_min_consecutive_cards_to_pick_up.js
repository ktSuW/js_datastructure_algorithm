// Approach - 1
// Time O(n) for iterating through cards
// Time O(indexes.length) , therefore O(n)
// Space O(n) + O(n)
var minimumCardPickup = function (cards) {
  let map = new Map();
  let indexes = [];
  for (let i = 0; i < cards.length; i++) {
    if (map.has(cards[i])) {
      let firstIndex = map.get(cards[i]);
      let secondIndex = i;
      indexes.push([firstIndex, secondIndex]);
    }
    map.set(cards[i], i);
  }
  // console.log(indexes);
  let globalMin = Number.MAX_VALUE;
  let localMin = Number.MAX_VALUE;
  for (let i = 0; i < indexes.length; i++) {
    let item = indexes[i];
    localMin = item[1] - item[0] + 1;

    globalMin = Math.min(localMin, globalMin);
    // console.log(globalMin);
  }
  return globalMin === Number.MAX_VALUE ? -1 : globalMin;
};
