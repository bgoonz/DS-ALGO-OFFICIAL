//Write listToArray function that produces an array from a list. 
function listToArray(list){
let arr = [];
let i = list;
while (i){                  
    arr.push(i.value)
    i = i.rest
}
return arr;
}
console.log(listToArray({value:10, rest:{value:20, rest:{value:30, rest:null}}}))
//Description: while i does not equal to null or i=true arr[0]=i.value, in 2nd loop i=list.rest, arr[1]=i.value=20 ...



//Solution-2
// function listToArray(list){
// let arr = [];
// for(let i=list; i; i = i.rest)  
// { arr.push(i.value) }
// return arr }
//Description: In for loop 1st we assigned all properties of list to i, so all property of list can be accessed via i, arr[0]=arr.push(i.value) = list.value, next condition statement here it is i so condition will be false if i=null & i=i.rest i.e. arr[1]=arr.push(i.rest.value) ...