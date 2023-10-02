function solution(n) {
  var answer = 0;
  
  for (let i = 1; i < n + 1; i++) {
    var sum = 0;
    for (let j = i; j < n + 1; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      }
      if (sum > n) {
        break;
      }
    }
  }
  
  return answer;
}