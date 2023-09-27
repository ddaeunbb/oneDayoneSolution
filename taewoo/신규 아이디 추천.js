function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase();
  
  // 2단계
  new_id = new_id.split('').filter((el) => (
      (el.charCodeAt() > 96 && el.charCodeAt() < 123) || // 알파벳
      (el.charCodeAt() > 47 && el.charCodeAt() < 58) || // 숫자
      (el.charCodeAt() === 45) || // 빼기
      (el.charCodeAt() === 95) || // 밑줄
      (el.charCodeAt() === 46) // 마침표
  )).join('');
  
  // 3단계
  while (new_id.indexOf('..') >= 0) {
      new_id = new_id.replace('..', '.');
  }

  // 4단계
  if (new_id.indexOf('.') === 0) {
      new_id = new_id.substring(1);
  }
  if (new_id.lastIndexOf('.') === (new_id.length - 1)) {
      new_id = new_id.substring(0, new_id.length - 1);
  }

  // 5단계
  if (new_id === '') {
      new_id = 'a';
  }
  
  // 6단계
  if (new_id.length >= 16) {
      new_id = new_id.substring(0, 15);
      if (new_id.lastIndexOf('.') === (new_id.length - 1)) {
          new_id = new_id.substring(0, new_id.length - 1);
      }
  }
  
  // 7단계
  if (new_id.length <= 2) {
      let last = new_id[new_id.length - 1];
      while (new_id.length < 3) {
          new_id += last;
      }
  }

  return new_id;
}