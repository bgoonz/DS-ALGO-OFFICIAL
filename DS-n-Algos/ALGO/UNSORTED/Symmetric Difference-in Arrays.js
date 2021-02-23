//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
function diffArray(arr1, arr2){
return arr1.concat(arr2).filter(
    item => (!arr1.includes(item) || !arr2.includes(item))
)
}
console.log(diffArray([2,4,6,8,0],[2,4,6,0]))
