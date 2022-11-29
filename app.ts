

let age: number = 50;
let name1: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;


let callback = (a: number): number => { return 100 + a };


let anything: unknown = -20;
anything = 'Text';
anything = {};


let some: unknown;
some = 'Text';

let str: string;

if(typeof some === "string") {
  str = some;
}


let person1: [string, number];

person1 = ['Max' , 21];

enum Role {LOADING, READY};

const person2 = {
  role: Role.LOADING,
}

if (person2.role === Role.LOADING) {
  console.log('Role: ', Role.LOADING);
}

let truble: number | string

truble = 1
truble = "gh"

let trouble2: 'enable' | 'disable'


function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type DatabaseDate = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}


const page1: DatabaseDate = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: DatabaseDate = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}