const longestPalindrome = (s) => {
  const n = s.length;
  const dp = [];
  let maxLength = 0;
  let start = 0;
  for (let i = 0; i < n; i++) {
    const toPush = [];
    for (let j = 0; j < n; j++) {
      toPush.push(false);
    }
    dp.push(toPush);
  }

  for (let i = 0; i < n; i++) {
    const j = i;
    dp[i][j] = true;
    maxLength = 1;
  }
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }
  for (let k = 3; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      const j = i + k - 1;
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      if (dp[i][j]) {
        start = i;
        maxLength = k;
      }
    }
  }
  return s.substr(start, maxLength);
};

console.log(longestPalindrome('cbbd'));
