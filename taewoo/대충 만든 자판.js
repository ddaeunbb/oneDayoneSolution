function solution(keymap, targets) {
  var answer = [];
  let map = new Map();
  // 알파벳 별로 최소 누름 수 Map에 넣기
  keymap.forEach((key) => {
      key.split('').forEach((alphabet, idx) => {
          if (map.get(alphabet) > idx || !map.has(alphabet)) {
              map.set(alphabet, idx + 1);
          }
      });
  });
  // 순회하며 알파벳 누름 수 구하기
  targets.forEach((target) => {
      let number = 0;
      target.split('').forEach((alphabet) => {
          number += map.get(alphabet);
      });
      if (!number) {
          answer.push(-1);
      }
      else {
          answer.push(number);
      }
  })
  return answer;
}