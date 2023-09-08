function solution(wallpaper) {
  const x = []
  const y = []
  
  for (let i = 0; i < wallpaper.length; i++){
      for(let j = 0; j < wallpaper[0].length; j++){
          if(wallpaper[i][j] === '#'){
              x.push(i);
              y.push(j);
          }
      }
  }
  return [Math.min(...x), Math.min(...y), Math.max(...x) + 1, Math.max(...y) + 1,]
}