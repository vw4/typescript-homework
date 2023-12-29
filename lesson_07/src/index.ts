// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.
interface IMixedValues {
    [key: string]: string | number;
}

const mixedValuesObject: IMixedValues = {
    1: 0,
    'foo': 'bar',
    // 'baz': {}, // error: value is not a string or number
};


// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface IFunctionValues {
    [key: string]: (...any: any[]) => void,
}
const functionValuesObject: IFunctionValues = {
    'foo': (param1: number, param2: string) => {},
    'bar': Math.max,
    // 'baz': 'boo', // error: value is not a function
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву.
// Ключі повинні бути числами, а значення - певного типу.
interface IArrayLike<T> {
    [key: number]: T,
}
const arrayLike: IArrayLike<string> = {
    1: 'foo',
    2: 'bar',
    // 3: 43, // error: value is not string
    // 'string': 'baz' // error: key is no a number
    '5': 'qux',
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface IArrayLikeWithNameField<T> {
    name: string,
    [key: number]: T,
}
const arrayLikeWithNameField: IArrayLikeWithNameField<string> = {
    name: 'array',
    1: 'foo',
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface IIndexSignature {
    [key: string]: string,
}
type IndexSignatureExtended = IIndexSignature & {
    name: string,
    id: number,
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
// чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

function assertAllValuesIsNumbers(obj: IArrayLike<any>) {
    return Object.values(obj).every(value => typeof value === 'string');
}
console.log(assertAllValuesIsNumbers(arrayLike));