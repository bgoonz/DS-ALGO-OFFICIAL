function largestOfFour(arr) {
    let maxarray =[];
   for (let i=0; i<arr.length; i++){
     maxarray.push(Math.max(...arr[i]))
   }
   return maxarray;
   }
   
   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));