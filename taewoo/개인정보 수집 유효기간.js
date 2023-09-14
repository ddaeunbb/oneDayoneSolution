function solution(today, terms, privacies) {
  var answer = [];
  
  privacies.forEach((privacy, idx) => {
      let priInfo = privacy.split(' ');
      terms.forEach((term) => {
          let termInfo = term.split(' ');
          if (priInfo[1] === termInfo[0]) {
              let newDate = [];
              let plusMonth = Number(priInfo[0].split('.')[1]) + Number(termInfo[1]);
              newDate.push(String(Number(priInfo[0].split('.')[0]) + Math.floor(plusMonth / 12)));
              if (plusMonth % 12 === 0) {
                  newDate[0] = String(Number(newDate[0] - 1));
                  newDate.push('12');
              }
              else {
                  newDate.push(String(plusMonth % 12));
              } 
              newDate.push(priInfo[0].split('.')[2]);
              if (new Date(newDate.join('.')) <= new Date(today)) {
                  answer.push(idx + 1);
              }
          }
      })
  })
  
  return answer;
}