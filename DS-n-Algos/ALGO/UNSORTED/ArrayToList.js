//A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
//EXAMPLE:
// let list = {
//     value: 1, rest: {value: 2, rest: {value: 3, rest: null } 
//                    } 
//           } 
function arrayToList(arr){
let list = null;
for (let i=arr.length-1; i>=0; i--){
    list = {value:arr[i], rest:list}
    console.log(list)
}
return list;
}
console.log(arrayToList([10,20,30]))



