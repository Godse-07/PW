let obj={
    name: "Pushan",
    age: 20,
    grade: "A"
}

let check = (abc, pro)=>{
    if(abc.hasOwnProperty(pro)){
        return true;
    }else{
        return false;
    }
}

console.log(check(obj, "name"));

console.log(check(obj, "code"));