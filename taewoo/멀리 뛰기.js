function solution(n) {
  // n = 1 -> result = 1
  // n = 2 -> result = 2
  // n = 3 -> result = 3
  // n = 4 -> result = 5
  // n = 5 -> result = 8
  // n = 6 -> result = 13
  // n = 7 -> result = 21
  // -> 피보나치 수열
  var dp = [0, 1, 2];

  for (var i = 3; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}