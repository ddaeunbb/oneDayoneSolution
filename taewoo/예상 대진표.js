function solution(n,a,b) {
  // n명의 참가자는 각각 1부터 n번을 차례대로 배정받음
  // 1-2, 3-4, ... n-1-n번의 참가자끼리 게임 진행
  // 이긴 사람은 다음 라운드 진출
  // 다음 라운드 진출할 참가자의 번호는 다시 1번부터 n/2번을 차례대로 배정받음
  // 만약 1-2번끼리 겨루는 게임에서 2번이 승리했다면 다음 라운드에서 1번을 부여받음
  // 처음 라운드에서 a번을 가진 참가자는 경쟁자로 생각하는 b번 참가자와 몇 번째 라운드에서 만나는지 return
  // 단, a번 참가자와 b번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정
  // n: 참가자 수
  // a: 참가자 번호
  // b: 경쟁자 번호
  // 1 2 3 4 5 6 7 8 -> 1라운드
  //  2   4   6   7 -> 2라운드
  //    4       7 -> 3라운드
  // 1 2 3 4 5 6 7 8 -> 1라운드
  //  1   3   5   8 -> 2라운드
  //    1       8
  return search(Array(n).fill().map((v,i)=>i+1), a, b, 1);
}

function search(array, a, b, num) {
  // 1 2 3 4에서 2와 3일땐 라운드를 한 번 더 가야함
  if ((
    array.indexOf(a) - array.indexOf(b) === 1 && array.indexOf(b) % 2 == 0
  ) || (
    array.indexOf(b) - array.indexOf(a) === 1 && array.indexOf(a) % 2 == 0
  )) {
    return num;
  }
  var new_table = [];
  for (var i = 0; i < array.length / 2; i++) {
      if (array[i * 2 + 1] === a || array[i * 2 + 1] === b) {
          new_table.push(array[i * 2 + 1]);
          continue;
      }
      new_table.push(array[i * 2]);
  }
  return search(new_table, a, b, num + 1);
}