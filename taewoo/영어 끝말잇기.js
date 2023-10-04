function solution(n, words) {
  // 순서대로 단어 말함
  // 마지막 사람 다음은 다시 1번부터
  // 앞사람이 말한 단어의 마지막 문자로 시작해야함
  // 이전에 등장했던 단어는 사용불가
  // 한 글자인 단어는 안됨
  // n: 사람의 수
  // words: 사람들이 순서대로 말한 단어
  // 가장 먼저 탈락하는 사람의 번호, 그 사람이 자신의 몇 번째 차례에 탈락하는지
  // 탈락하는 사람이 없다면 [0, 0]
  // words를 순회하며 탈락하는 부분이 나올 때 n을 인덱스로 나눈 몫은 차례, 나머지는 어느 사람
  var talked = [];
  
  for (var i = 0; i < words.length; i++) {
      var answer = [(i + 1) % n ? (i + 1) % n : n, Math.ceil((i + 1) / n)];
      
      if (i > 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
          return answer;
      }
      else if (talked.includes(words[i])) {
          return answer;
      }
      
      talked.push(words[i]);
  }
  
  return [0, 0];
}