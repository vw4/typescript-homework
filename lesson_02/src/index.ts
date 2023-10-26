class School {
    directions: Direction[] = [];

    addDirection(direction: Direction): void {
        this.directions.push(direction);
    }
}

class Direction {
    levels: any[] = [];
    private _name: string;

    get name(): string {
        return this._name;
    }

    constructor(name: string) {
        this._name = name;
    }

    addLevel(level: Level): void {
        this.levels.push(level);
    }
}

class Level {
    groups: Group[] = [];
    private _name: string;
    private _program: Direction;

    constructor(name: string, program: Direction) {
        this._name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): Direction {
        return this._program;
    }

    addGroup(group: Group): void {
        this.groups.push(group);
    }
}

class Group {
    private _students: Student[] = [];
    directionName: string;
    levelName: string;

    get students(): Student[] {
        return this._students;
    }

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    addStudent(student: Student): void {
        this._students.push(student);
    }

    showPerformance(): Student[] {
        const compareStudents = (a: Student, b: Student) => b.getPerformanceRating() - a.getPerformanceRating();
        return this.students.sort(compareStudents);
    }
}

class Student {
    grades: { [key: string]: number } = {};
    attendance: boolean[] = [];
    firstName: string;
    lastName: string;
    birthYear: number;

    constructor(firstName: string, lastName: string, birthYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this.birthYear;
    }

    setGrade(subject: string, grade: number): void {
        this.grades[subject] = grade;
    }

    markAttendance(present: boolean): void {
        this.attendance.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = Object.values(this.grades);

        if (gradeValues.length === 0) return 0;

        const gradesSum: number = gradeValues.reduce((sum, grade) => sum + grade, 0);
        const averageGrade: number = gradesSum / gradeValues.length;

        const attendancePercentage: number =
            (this.attendance.filter((present) => present).length / this.attendance.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
