var arr = [];

function createObj(name, phase, gender){
  let tempObj = {};
  tempObj.name = name;
  tempObj.phase = phase;
  tempObj.gender = gender;
  arr.push(tempObj);
}

createObj("Akbar", 1, "Male")
createObj("Icha", 1, "Female")
createObj("Joni", 2, "Male")
createObj("Jane", 3, "Female")
createObj("Denny", 2, "Male")
createObj("Lala", 3, "Female")

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }
}

console.log(arr);
console.log("_____________________________");
console.log(getData("Lala"));
