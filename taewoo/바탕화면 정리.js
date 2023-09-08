function solution(wallpaper) {
  let xLocList = [];
  let yLocList = [];
  
  wallpaper.forEach((row, rowIdx) => {
      row.split('').forEach((col, colIdx) => {
          if (col === '#') {
              xLocList.push(rowIdx);
              yLocList.push(colIdx);
          }
      })
  });

  return [Math.min(...xLocList), Math.min(...yLocList), Math.max(...xLocList) + 1, Math.max(...yLocList) + 1];
}