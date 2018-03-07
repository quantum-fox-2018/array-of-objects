// Release 0
let arr = [];
function createObj(name, phase, gender) {
  let obj = {
    name: name,
    phase: phase,
    gender: gender
  }
  arr.push(obj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');

console.log(arr);

//Release 1
function getData(name) {
  let hasil = [];
  for(let i in arr) {
    if(arr[i].name === name) {
      hasil.push(arr[i]);
    }
  }
  return hasil;
}

console.log(getData('Icha'));
