function Person2(name, age) {
    this.name = name;
    this.age = age;
}

var syh2 = new Person2('양훈', 33); // 생성 되었습니다.
console.log(syh2);

// ES2015 (ES6)
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var syh = new Person('양훈', 33); // 생성 되었습니다.
console.log(syh);

