const sentence = "please please submit your assignment on time , your assignment is very important";

const result = wordcounter(sentence)

console.log(result);

function wordcounter(sentence){
    let wordCount = {};
    let words = sentence.split(" ");
    for(let word of words){
        wordCount[word] = wordCount[word] + 1 || 1;
    }
    return wordCount;
}