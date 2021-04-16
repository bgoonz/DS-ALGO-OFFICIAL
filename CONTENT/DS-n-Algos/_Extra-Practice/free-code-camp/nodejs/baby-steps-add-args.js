const numbers = process.argv.slice(2);

var total = numbers.reduce( (done,curr) => {
    return Number(done)+Number(curr);
})

console.log(total);