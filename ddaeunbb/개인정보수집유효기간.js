// 개인정보 수집 유효기간.js

function solution(today, terms, privacies) {
  let answer = [];
  
  let current = today.split('.').map(Number);
  let dict = {};
  // 날짜 저장하기
  terms.map(term => {
      let copy = term.split(' ');
      dict[copy[0]] = Number(copy[1])
  })
  
  // 돌아가며 만료기한 확인하기
  for(let i = 0; i < privacies.length; i++){
      let copy = privacies[i];
      let check = copy[copy.length-1];
      copy = copy.slice(0,-1).split('.').map(Number);
      
      // 유효기간별로 더하고 체크하기
      copy[0]+= Math.floor(dict[check] / 12);
      copy[1]+= dict[check] % 12;
      if(copy[1]> 12){
          copy[1]-=12;
          copy[0]+=1;
      }
      
      
      // 날짜가 만료되었는지 확인하기
      let trash = false;
      if(new Date(copy.join('.')) <= new Date(today)) trash = true;
      
      if(trash) answer.push(i+1)
  }
  return answer
}