function solution(id_list, report, k) {
  // 중복제거
  let answer = [];
  let originReport = [...new Set(report)];
  // 신고당한 애들 종이, 신고한애들종이
  let people = [];
  let count = {};
  let dict = {};
  
  originReport.forEach(el => {
      let check = el.split(' ');
      if(dict[check[0]] === undefined) dict[check[0]] = [check[1]];
      else dict[check[0]].push(check[1]);
      
      if(count[check[1]] === undefined) count[check[1]] = 1;
      else count[check[1]]++;
      
      // 신고당한 애들중 k보다 큰애들 추려내기
      if(count[check[1]] >= k ) people.push(check[1]);
  })
  
  let originPeople = [...new Set(people)];
  
  // 추려낸 애들끼리 신고한 애들별로 종이 돌아가면서 result 배열 메일 수 push
  for(let each of id_list){
      let count = 0;
      for(let person of originPeople){
          let arr = dict[each];
          if(arr && arr.includes(person)) count++; 
      }
      answer.push(count);
  }
  return answer
}