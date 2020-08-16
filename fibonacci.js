/**
 * Time complexity O(n)
 * Space Complexity O(1)
 * @param {*} n
 */
const fibonacci = (n) => {
  if (n < 2) {
    return 1;
  }
  let f1 = 1;
  let f2 = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = f1 + f2;
    f2 = f1;
    f1 = result;
  }

  return result;
};
