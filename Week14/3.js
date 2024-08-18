let students = [
    {
        name: "Pushan",
        marks: 99
    },
    {
        name: "Aditi",
        marks: 100
    },
    {
        name: "Payel",
        marks: 10
    },
    {
        name: "Dipak",
        marks: 89
    },
    {
        name: "Ram",
        marks: 96
    },
    {
        name: "Dhoni",
        marks: 95
    },
];

for(let student of students) {
    if(student.marks >= 90) {
        console.log(`Congratulations ${student.name}! You have cleared the exam1`);
    }
}
