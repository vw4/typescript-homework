// Вам потрібно створити тип DeepReadonly
// який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.
type TDeepReadonly<T> = {
    readonly [Key in keyof T]: TDeepReadonly<T[Key]>;
};

// Вам потрібно створити тип DeepRequireReadonly
// який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
type TDeepRequireReadonly<T> = {
    readonly [Key in keyof T]-?: TDeepRequireReadonly<T[Key]>;
};

// Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.
type TUpperCaseKeys<T> = {
    [Key in keyof T as Uppercase<string & Key>]: T[Key]
}

// Вам потрібно зробити свій аналог утіліти Pick, яка конструює новий тип,
// який буде включати в себе лише параметри передані в цю утіліту. Наприклад:
interface User {
    name: string;
    age: number;
    permission: string[];
}

type TPick<T, U extends keyof T = keyof T> = {
    [Key in U]: T[Key]
}

let newUser: TPick<User, "name" | "age">;
// повинен створити новий тип, який має включати в себе лише проперті name та age, без permissions