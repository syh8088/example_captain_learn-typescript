function logMessage(value: any) {
    console.log(value);
}

logMessage('hello');
logMessage(100);

var syh: string | number | boolean;

function logMessageV2(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }

    if (typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessageV2('hello');
logMessageV2(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 유니온
function askSomeone(someone: Developer | Person) {
    someone.name;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '디벨로퍼', age: 100 });

// 인터섹션
function askSomeone2(someone: Developer & Person) {
    someone.name;
    someone.age;
    someone.skill;
}

askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 100 });

var syh2: string | number | boolean;
var syh3: string & number & boolean;
