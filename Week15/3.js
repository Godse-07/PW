let obj= {
    name: "Pushan",
    age: 20,
    grade: "A"
}

let length = (abc)=>{
    let ans=0;
    for(let i in abc){
       if(abc.hasOwnProperty(i)){
           ans++;
       }
    }
    return ans;
}

console.log(length(obj));