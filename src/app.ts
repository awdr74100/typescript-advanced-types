type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Yi-Ru', ' Lan');
result.split(' ');

const fetchedUserData: {
  name: string;
  age: number;
  account?: {
    provider: string;
  };
} = {
  name: 'Ian',
  age: 23,
};

console.log(fetchedUserData.account?.provider);
console.log(fetchedUserData.account && fetchedUserData.account.provider);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(`Name: ${emp.name}`);
//   if ('privileges' in emp) console.log(`Privileges: ${emp.privileges[0]}`);
//   if ('startDate' in emp) console.log(`Start Date: ${emp.startDate}`);
// }

// printEmployeeInformation({ name: 'Leo', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('Driving a car...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }

//   loadCargo(amount: number) {
//     console.log(`Loading cargo ...${amount}`);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) vehicle.loadCargo(1000);
//   // if ('loadCargo' in vehicle) vehicle.loadCargo(1000);
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log(`Moving at speed: ${speed}`);
//   // if (animal.type === 'bird')
//   //   console.log(`Moving at speed: ${animal.flyingSpeed}`);
//   // if (animal.type === 'horse')
//   //   console.log(`Moving at speed: ${animal.runningSpeed}`);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// const emailInput = <HTMLInputElement>document.querySelector('.email');
// const passwordInput = document.querySelector('.password') as HTMLInputElement;
// const passwordAgainInput = document.querySelector('.passwordAgain');

// emailInput.placeholder = 'Enter your email';
// passwordInput.placeholder = 'Enter your password';

// if (passwordAgainInput) {
//   (passwordAgainInput as HTMLInputElement).placeholder =
//     'Enter your password again';
// }

// // { email: "Not a valid email", username: "Must start with a character!" }
// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character!',
// };
