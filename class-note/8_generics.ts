/*
function logText(text) {
    console.log(text);
    return text;
}

logText(10);
logText("하이");
logText(true);*/

function logText<T>(text: T):T {
    console.log(text);
    return text;
}

logText<number>(10);
logText<string>("하이");
logText<boolean>(true);


function logText2(text: string | number) {
    console.log(text);
    return text;
}

const a = logText2('a');
// a.split(''); // 타입이 string 하고 number 반환속성을 유니온으로 지정했기 때문에 확실하게 string 으로 오는 보장이 없다. 그래서 에러 발생됨
logText2(10);

// generics 사용
function logText3<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText3<string>('a');
str.split('');
const login = logText3<boolean>(true);

logText3<number>(10);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
    value: string;
    selected: boolean;
}

const obj: Dropdown = { value: 'abc', selected: true };

interface DropdownV2<T> {
    value: T;
    selected: boolean;
}

const objV2: DropdownV2<string> = { value: 'abc', selected: true };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    return text;
}

logTextLength<string>([ 'hi', 'abc' ]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLengthV2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLengthV2('a');
logTextLengthV2({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');