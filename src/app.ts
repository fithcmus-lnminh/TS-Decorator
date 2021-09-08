//Decorator
function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

@Logger("LOGGING-PERSON")
class Person {
  name = "Minh";

  constructor() {
    console.log("Creating person...");
  }
}

const per = new Person();

console.log(per);
