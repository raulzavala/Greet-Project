const isUpperCase = (string) => /^[A-Z]*$/.test(string);

function greet(obj1) {
  if (obj1 != null) {
    if (obj1 === Array) {
      const greeting = "Hello, ";
      const name =
        name +" "+
        obj1.forEach((element) => {
          return element + ",";
        });
      return greeting + name;
    } else {
      if (isUpperCase(obj1)) {
        return "HELLO " + obj1;
      } else {
        return "Hello, " + obj1;
      }
    }
  } else {
    return "Hel!";
  }
}

module.exports = { greet };
