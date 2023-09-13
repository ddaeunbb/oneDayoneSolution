// 내가 푼 풀이
function solution(s, skip, index) {
  s = s.split('').map(el => el.charCodeAt());
  skip = skip.split('').map(el=> el.charCodeAt());
  let answer = [];
  
  for(let alpha of s){
      count = 0;
      for(let i=1; i<=index; i++){
          count+=1;
          let copy = alpha + i;
          if(skip.indexOf(copy) > -1) count++;
      }
      
      let sum = count + alpha;

      if(sum > 122){
          let gap = sum - 122 - 1;
          sum = 97 + gap;
      }
      answer.push(String.fromCharCode(sum));
  }
  return answer.join('');
}


// 다른 사람 풀이
function solution(s, skip, index) {
  // 알파벳을 배열로 만들고, skip해야하는 알파벳을 제거하여 배열을 만든다.
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                    "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
  
  // 글자 중에서 기존에 있는 위치에 index를 더한다.
  // 그 다음, alphabet의 길이로 나눈 나머지로 alphabet에서 index를 찾아 return한다.
  // map으로 리턴했기 때문에 Join하여 정답을 낸다.
  return s.split('').map((a) => alphabet[(alphabet.indexOf(a) + index) % alphabet.length]).join('');
}


// 아스키코드로 푼 다른사람 풀이
function solution(s, skip, index){
  let answer = "";
  let arr = s.split('');

  arr.map(item => {
    // 아스키 코드로 변환
    let a = item.charCodeAt();
    for(let i = 0; i < index;  i++){
      a++;
      // z 이후 뒤로 넘어가면 a로 바꿔줌
      if(a > 122) a = 97;

      // 다시 문자로 변환해서 skip에 포함되어있는지 확인
      while(skip.includes(String.fromCharCode(a))){
        a++; // 한번 더 더한다.
        if(a > 122) a = 97; // z넘어가면 a로 바꿔줌
      }
    }
    answer+= String.fromCharCode(a);
  })
  return answer;
}