interface Person {
    name: string;
    age: number;
}

type PersonType = {
    name: string;
    age: number;
}

var syh: Person = {
    name: 'syh',
    age: 30
};

var syhType: PersonType = {
    name: 'syh',
    age: 30
};

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}