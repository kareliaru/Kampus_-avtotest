let calculator = {
    sum() {
      return a + b;
    },
  
    mul() {
      return a * b;
    },
  
    read() {
      a = +prompt('a?', 0);
      b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );