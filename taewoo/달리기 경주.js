function solution(players, callings) {
  let rankingMap = new Map();
  players.forEach((player, idx) => {
      rankingMap.set(player, idx);
  })
  callings.forEach((calling, idx) => {
      let prevPlayer = players[rankingMap.get(calling) - 1]
      players[rankingMap.get(calling) - 1] = calling;
      players[rankingMap.get(calling)] = prevPlayer;
      rankingMap.set(calling, rankingMap.get(calling) - 1);
      rankingMap.set(prevPlayer, rankingMap.get(prevPlayer) + 1);
  })
  let result = Array.from(rankingMap);
  result.sort((a, b) => a[1] - b[1]);
  return result.map((playerInfo) => playerInfo[0]);
}
