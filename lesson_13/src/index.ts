// Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції.
// Як параметр типу повинен обов'язково виступати функціональний тип.

type TReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним)
// та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру

type TArgumentAndReturnTypes<T> = T extends (...args: infer P) => infer R ? [R, ...P] : never;

function func (a: string, b: number): boolean {
    return true;
}

type functionTypes = TArgumentAndReturnTypes<typeof func>;
