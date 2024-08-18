let details= {
    name: "Pushan",
    age: 20,
    grade: "A"
}

function update_grade(details, grade){
    details.grade = grade;
}

update_grade(details, "O");

console.log(details.grade);
