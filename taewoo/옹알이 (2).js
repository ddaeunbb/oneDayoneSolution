function solution(babbling) {
  var answer = 0;
  
  babbling.forEach((babble) => {
      let count = 0;
      let preTalk = '';
      let stack = [];
      let babbleArray = babble.split('');
      while (babbleArray.length) {
          stack.push(babbleArray[0]);
          babbleArray.shift();
          if (stack.join('') === 'aya' || stack.join('') === 'ye' || stack.join('') === 'woo' || stack.join('') === 'ma') {
              if (preTalk !== stack.join(''))  {
                  preTalk = stack.join('');
                  count++;
                  stack = [];
              }
              
          }
      }
      
      if (count > 0 && stack.length === 0) {
          answer++;
      }
  })
  return answer;
}