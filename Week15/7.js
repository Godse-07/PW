let userMap = new Map();

function add_user(id, name, age, mail){
    userMap.set(id, {name, age, mail});
}

function update_user(id, name, age, mail){
    userMap.set(id, {name, age, mail});
}

function delete_user(id){
    userMap.delete(id);
}

add_user(1, "Pushan", 20, "Pushan@gmail.com");

for(let [key, value] of userMap){
    console.log(key, value);
}

update_user(1, "Pushan", 20, "null");

for(let [key, value] of userMap){
    console.log(key, value);
}

delete_user(1);

