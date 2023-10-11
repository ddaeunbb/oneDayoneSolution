function solution(k, tangerine) {
  // 수확한 귤 중 k개를 골라 상자 하나에 담아 판매
  // 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화
  // 8개 귤의 크기가 [1, 3, 2, 5, 4, 5, 2, 3]일 때
  // 6개를 판매하고 싶다면 크기가 1, 4인 귤을 제외한 여섯 개의 귤을 상자에 담으면
  // 귤의 크기의 종류가 2, 3, 5로 총 3가지가 되어 이때가 서로 다른 종류가 최소일 때
  // k: 한 상자에 담으려는 귤의 개수
  // tangerine: 귤의 크기를 담은 배열
  // 가장 적은 수의 귤의 크기를 뺌
  // k에 맞춰질 때까지 줄임
  
  var answer = 0;
  var countMap = new Map();
  
  for (var i = 0; i < tangerine.length; i++) {
    var prev = countMap.get(tangerine[i]);
    prev ? countMap.set(tangerine[i], countMap.get(tangerine[i]) + 1) : countMap.set(tangerine[i], 1);
  }

  var countArray = Array.from(countMap).sort((a, b) => b[1] - a[1]);

  for (var i = 0; i < countArray.length; i++) {
    if (k <= countArray[i][1]) {
      answer++;
      return answer;
    }
    k -= countArray[i][1];
    answer++;
  }
}