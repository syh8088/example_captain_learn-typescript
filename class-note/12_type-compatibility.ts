// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;
developer = person; // 기본적으로 타입 호환은 'Developer' 보다 'Person' 이 더 많은 타입이 가지고 있어야 한다.
person = developer;
developer = new Person();

// 함수
var add = function(a: number) {

};

var sum = function(a: number, b: number) {

};

add = sum;
sum = add;

// 제네릭
interface Empty<T> {

}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;



interface NotEmpty<T> {
    data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;

