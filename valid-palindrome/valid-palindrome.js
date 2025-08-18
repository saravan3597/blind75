const isPalindrome = (s) => {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    // You need these checks to skip non-alphanumeric characters and if you have an
    //assurance that the input contains only valid characters, you can skip this check
    while (l < r && !this.alphaNum(s[l])) {
      l++;
    }
    while (r > l && !this.alphaNum(s[r])) {
      r--;
    }
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

/**
 * @param {char} c
 * @return {boolean}
 */
const alphaNum = (c) => {
  return (
    (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
  );
};
