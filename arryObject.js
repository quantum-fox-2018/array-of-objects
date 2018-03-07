var arr=[]
function createObj(name,phase,gender){
  var obj={}
    obj['name'] = name;
    obj['phase'] = phase;
    obj['gender'] = gender;
arr.push(obj)
}

createObj('akbar',1,'male');
createObj('icha',1,'female');
createObj('adit',1,'male');
createObj('tama',2,'male');
createObj('rifki',2,'male');

console.log(arr);

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].name=name){
      return arr[i]
    }
  }


}

console.log(getData('icha'))
