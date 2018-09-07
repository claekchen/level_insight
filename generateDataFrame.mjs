import dataOfLevel from "./src/datas/dataOfLevel";
let tempObj = {};
Object.keys(dataOfLevel).map(industry => (tempObj[industry] = {}));
Object.keys(tempObj).map(industry => {
  Object.keys(dataOfLevel[industry]["company"]).map(company => {
    tempObj[industry][company] = {};
    dataOfLevel[industry]["company"][company]["level"].map(levelObj => {
      tempObj[industry][company][levelObj.key] = {
        salary: null,
        stock: null,
        bonus: null
      };
    });
  });
});
console.log(JSON.stringify(tempObj));
