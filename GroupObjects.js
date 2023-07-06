// Write a progrma to produce below output
// input [{id:1,name:"a"},{id:5,name:"b"},{id:3,name:"c"},{id:1,name:"d"},{id:3,name:"e"}]
// Output [
//   { id: 1, name: [ 'a', 'd' ] },
//   { id: 3, name: [ 'c', 'e' ] },
//   { id: 5, name: 'b' }
// ]
function groupObjects(arr1) {
    const output = [];
    const group = {};
    arr1.forEach(element => {
      if(group[element.id]) {
        if(Array.isArray(group[element.id].name)) {
            group[element.id].name.push(element.name);
        }
        else {
            group[element.id].name = [group[element.id].name, element.name];
        }
      }  
      else {
        group[element.id] = {id: element.id, name: element.name}
      }
    });
    for (const id in group) {
        output.push(group[id])
    }
    return output;
}

console.log(groupObjects([{id:1,name:"a"},{id:5,name:"b"},{id:3,name:"c"},{id:1,name:"d"},{id:3,name:"e"}]))