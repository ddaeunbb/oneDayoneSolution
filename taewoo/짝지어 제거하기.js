function solution(s) {
  // 문자열에서 같은 알파벳 2개 붙어있는 짝 찾기
  // 2개 붙어있는 짝을 제거한 뒤 앞뒤로 문자열을 이어 붙임
  // 반복해서 문자열이 모두 제거되면 1, 아니라면 0
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  
  return stack.length ? 0 : 1;
}