var arr = [];

function createObj(name, phase, gender) {
  arr.push({name: name, phase: phase, gender: gender});
  console.log(arr);
}

function getName(name) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      console.log(arr[i]);
    }
  }
}

function getPhase(phase) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].phase === phase) {
      console.log(arr[i]);
    }
  }
}

function getGender(gender) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].gender === gender) {
      console.log(arr[i]);
    }
  }
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');

getName('Icha');
getPhase(1);
getGender('male');
