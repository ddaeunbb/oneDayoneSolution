function solution(new_id) {
  let lower = new_id.toLowerCase();
  let wordArr = lower.split('');
  
  wordArr = wordArr.map(el => {
      let num = el.charCodeAt();
      if(num === 45 || num === 46 || num === 95 ||(num >= 97 && num <=122) || (num >= 48 && num <= 57)) return el
      else return ''
  })
  
  wordArr = wordArr.join('');
  // 45 46 95 97~122
  while(wordArr.indexOf('..') > -1){
      wordArr = wordArr.replaceAll('..', '.');
  }
  
  // 앞 없애기
  wordArr = wordArr.split('');
  
  while(wordArr[0] === '.'){
      wordArr[0] = '';
      wordArr = wordArr.join('').split('');
  };
  
  while(wordArr[wordArr.length-1] === '.'){
      wordArr[wordArr.length-1] = '';
      wordArr = wordArr.join('').split('');
  }
  
  wordArr = wordArr.join('');
  
  if(wordArr.length >=3 && wordArr.length <= 15) return wordArr
  
  if(wordArr.length <=2 && wordArr.length > 0){
      while(wordArr.length < 3){
          wordArr += wordArr[wordArr.length-1];
      }
      return wordArr
  }
  
  if(wordArr.length === 0){
      while(wordArr.length < 3) wordArr+= 'a';
      return wordArr
  }
  
  if(wordArr.length > 15){
      wordArr = wordArr.slice(0,15).split('');
      while(wordArr[wordArr.length-1] === '.'){
          wordArr[wordArr.length-1] = '';
          wordArr = wordArr.join('').split('');
      }
      return wordArr.join('')
  }
  
  return wordArr.join('');
}