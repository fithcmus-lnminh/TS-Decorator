//Decorator
function Logger(logString: string) {
  return function (target: Function) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookElement = document.getElementById(hookId);
    const p = new constructor();

    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
  };
}

//@Logger("LOGGING-PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Minh";

  constructor() {
    console.log("Creating person...");
  }
}

const per = new Person();

console.log(per);

//------------------------------------------------------

//Property Decorator
function Log(target: any, propertyName: string | Symbol) {
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  //setter
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error("Invalid price!");
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number): number {
    return this._price * (1 + tax);
  }
}
