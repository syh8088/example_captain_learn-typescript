// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
};

// 타입 추론 기본 3
interface DropdownV2<T> {
    value: T;
    title: string;
}

interface DetailDropdown<K> extends DropdownV2<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailDropdown<string> = {
    value: 'a',
    title: 'abc',
    description: 'ab',
    tag: 'a'
};

var shoppingItemV2: DropdownV2<string> = {
    value: 'abc',
    title: 'hello'
};

// Best Common Type
var arr = [1, 2, true, true, 'a'];
