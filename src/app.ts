//Decorator
function Logger(target: Function) {
  console.log("Logging...");
  console.log(target);
}

@Logger
class Person {
  name = "Minh";

  constructor() {
    console.log("Creating person...");
  }
}

const per = new Person();

console.log(per);
