function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < words.length; j++) {
      let double = words[j].repeat(2);
      if(babbling[i].includes(double)) continue;
      babbling[i] = babbling[i].split(words[j]).join(' ');
    }
    if(babbling[i].split(" ").join('').length === 0) answer++;
  }
  return answer;
}