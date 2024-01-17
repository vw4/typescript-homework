// Написати декоратор методу @Catch, який має перехоплювати помилки та виводити повідомлення
// "Oops, there is an error in ${METHOD_NAME}: ${ERROR}".
//
// Наприклад

class UsersService {
    @Catch
    getUsers() {
        throw new Error("No users");
    }
}

// На виклику методу getUsers у консоль має вивестись повідомлення "Oops, there is an error in getUsers: No users"

function Catch<T, A extends any[], R>(
    originalMethod: (...args: any[]) => R,
    context: ClassMethodDecoratorContext<T, (...args: A) => R>
) {
    if (context.kind !== 'method') {
        throw new Error('Method-only decorator');
    }

    function catchMethod(this: T, ...args: A): R | void {
        try {
            return originalMethod.apply(this, args);
        } catch (e) {
            console.error(`Oops, there is an error in ${String(context.name)}: ${e}`);
        }
    }

    return catchMethod;
}

const userService = new UsersService();
userService.getUsers();