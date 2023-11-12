abstract class AbstractFigure {
    readonly color: string;
    readonly name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }

    abstract calculateArea(): number;
}

interface IRectangleFigure {
    print(): void;
}

// or
// abstract class AbstractRectangleFigure extends AbstractFigure {
//     abstract print(): void;
// }

class Circle extends AbstractFigure {
    private _radius: number = 0;

    get radius(): number {
        return this._radius;
    }

    set radius(radius: number) {
        this._radius = radius;
    }

    get diameter(): number {
        return this._radius * 2;
    }

    set diameter(diameter: number) {
        this._radius = diameter / 2;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Triangle extends AbstractFigure {
    private _side: number = 0;
    private _height: number = 0;

    get height(): number {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }

    get side(): number {
        return this._side;
    }

    set side(length: number) {
        this._side = length;
    }

    calculateArea(): number {
        return 0.5 * this._side * this._height;
    }
}

class Rectangle extends AbstractFigure implements IRectangleFigure {
    private _sides: [number, number] = [0, 0];

    get sides(): [number, number] {
        return this._sides;
    }

    set sides(sides: [number, number]) {
        this._sides = sides;
    }

    calculateArea(): number {
        return this._sides[0] * this._sides[1];
    }

    print(): void {
        console.log('S = a * b');
    }
}

class Square extends AbstractFigure implements IRectangleFigure {
    private _side: number = 0;

    get side(): number {
        return this._side;
    }

    set side(side: number) {
        this._side = side;
    }

    calculateArea(): number {
        return this._side ** 2;
    }

    print(): void {
        console.log('S = a ^ 2');
    }
}

const circle = new Circle('red', 'circle');
circle.radius = 1;
const triangle = new Triangle('green', 'triangle');
triangle.side = 2;
triangle.height = 1;
const rectangle = new Rectangle('blue', 'rectangle');
rectangle.sides = [2, 4];
const square = new Square('black', 'square');
square.side = 2;

const figures: AbstractFigure[] = [circle, triangle, rectangle, square];
for (const figure of figures) {
    console.log(`[${figure.name}] color = "${figure.color}", calculateArea = ${figure.calculateArea()}"`);
}

const rectangleFigures: IRectangleFigure[] = [rectangle, square];
for (const rectangleFigure of rectangleFigures) {
    rectangleFigure.print();
}