// 내가 푼 풀이
function solution(players, callings) {
  let copy = [...players];
  let dict = {};
  let call = {};
  
  for(let i = 0; i < players.length; i++){
      dict[players[i]] = i;
  }
  
  callings.forEach(player => {
      let state = dict[player];
      let frontPlayer = copy[state-1];
      copy[state-1] = player;
      copy[state] = frontPlayer
      
      dict[player]--;
      dict[frontPlayer]+=1;
  })
  return copy
}
