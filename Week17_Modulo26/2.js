function manipulateString(str, logString) {
    const upperCaseStr = str.toUpperCase();
    return () => {
      console.log(`The manipulated string is: ${upperCaseStr}`);
    };
  }
  
  const logStringCallback = manipulateString("hello, world!", logString);
  logStringCallback(); 