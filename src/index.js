module.exports = function longestConsecutiveLength(array) {
  let longest_streak = 0
  let num_set = new Set(array)


  for (let num of num_set) {
    if (num_set.has(num - 1) == false) {
      let current_num = num;
      let current_streak = 1;

      while (num_set.has(current_num + 1)) {
        current_num += 1;
        current_streak += 1;
      }

      longest_streak = Math.max(current_streak, longest_streak);
    }
  }

 return longest_streak
}