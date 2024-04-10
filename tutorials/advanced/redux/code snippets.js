// assigning a function to a variable
function greetUser() {
    return "Hello!";
  }
  
  let fn = greetUser;
  
  // pass as an argument 
  function addNumber () {
      return 1 + 1
  }
  
  function getNumbers (addNumber) {
      return addNumber()
  }
  
  let result = getNumbers;
  result()
  
  