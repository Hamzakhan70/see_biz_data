function areaOfHall(l, w) {
  let lenghtOfHall = l;
  let widthOfHall = w;
  return new Promise((resolve, reject) => {
    resolve([lenghtOfHall, widthOfHall]);
  });
}

areaOfHall(67, 54).then(calTables).then(calAc).then(calFans);

function calAc(area) {
  return new Promise((resolve, reject) => {
    let ac = Math.floor(area / 100);
    console.log(`These are numbers of AC in Hall:` + ac);
    resolve(area);
  });
}
function calFans(area) {
  let radius = Math.floor(Math.sqrt(area / Math.PI));
  let fans = radius * 2;
  console.log(`These are numbers of fans in 2 rows:` + fans);
  return new Promise((resolve, reject) => {
    resolve();
  });
}
function calTables(area) {
  return new Promise((resolve, reject) => {
    let lenghtOfHall = area[0];
    let widthOfHall = area[1];
    if (lenghtOfHall > widthOfHall) {
      let firstANDlast = Math.floor(lenghtOfHall / 12 + 1);
      let tables = firstANDlast * 3;
      console.log("These are tables in 3 rows:" + tables);
    } else if (lenghtOfHall < widthOfHall) {
      let firstANDlast = Math.floor(widthOfHall / 12 + 1);
      let tables = firstANDlast * 3;
      console.log("These are tables in 3 rows:" + tables);
    } else if (lenghtOfHall == widthOfHall) {
      console.log("----------Hall is in square shape-----------");
      let firstANDlast = Math.floor(widthOfHall / 12 + 1);
      let tables = firstANDlast * 3;
      console.log(tables);
      console.log("These are tables in 3 rows:" + tables);
    }
    resolve(lenghtOfHall * widthOfHall);
  });
}
