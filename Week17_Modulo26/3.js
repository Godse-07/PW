function ageInDays(person, logResult) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;
  
    return () => {
      logResult(`The person's full name is ${fullName}, and their age in days is ${ageInDays}.`);
    };
  }
  
  
  const person = { firstName: "Mithun", lastName: "S", age: 20 };
  const logResultCallback = ageInDays(person, console.log);
  logResultCallback(); 