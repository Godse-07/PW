let ans = (name)=>{
    let charCount = {};
    for(let a of name){
        charCount[a] = charCount[a] + 1 || 1;
        if(charCount[a] > 1){
            return false;
        }
    }
    return true;
}

console.log(ans("Pushan"));