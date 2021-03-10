const words = ["eat","tan", "how", "ant", "ate", "hello"]
function alphabetize(word) {
    if (!word) {
        return;
    }
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}
// main function
function anagramGrouper(words){
    const anagrams = {};
    words.forEach((word)=>{
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    });
    return anagrams;
}//Output://aet: (3) ["eat", "tea", "ate"]
//ant: (2) ["tan", "nat"]
//abt: ["bat"]

// store the result (anagrams object) in a variable called groupedAnagrams
const groupedAnagrams = anagramGrouper(words);

// iterate over groupedAnagrams, printing out each key:value pair on an individual line
for(const sortedWord in groupedAnagrams){
    let str = groupedAnagrams[sortedWord].toString();
let arr = str.split()
console.log(arr)
}
