type Lecturer = {
    name: string,
    surname: string,
    position: string,
    company: string,
    experience: string,
    courses: string,
    contacts: string[],
}

class School {
    private _areas: Area[] = [];
    private _lecturers: Lecturer[] = [];

    get areas(): Area[] {
        return this._areas;
    }

    get lecturers(): Lecturer[] {
        return this._lecturers;
    }

    addAreas(...areas: Area[]): void {
        this._areas.push(...areas);
    }

    removeAreas(...areas: Area[]): void {
        this._areas = this._areas.filter(area => areas.includes(area));
    }

    addLecturers(...lecturers: Lecturer[]): void {
        this._lecturers.push(...lecturers);
    }

    removeLecturers(...lecturers: Lecturer[]): void {
        this._lecturers = this._lecturers.filter(lecturer => lecturers.includes(lecturer));
    }
}

class Area {
    private _levels: Level[] = [];
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get levels(): Level[] {
        return this._levels;
    }

    addLevels(...levels: Level[]): void {
        this._levels.push(...levels);
    }

    removeLevels(...levels: Level[]): void {
        this._levels = this._levels.filter(level => levels.includes(level));
    }
}

class Level {
    private _groups: Group[] = [];
    private readonly _name: string;
    private readonly _description: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get description(): string {
        return this._description;
    }

    get name(): string {
        return this._name;
    }

    get groups(): Group[] {
        return this._groups;
    }

    addGroups(...groups: Group[]): void {
        this._groups.push(...groups);
    }

    removeGroups(...groups: Group[]): void {
        this._groups = this._groups.filter(group => groups.includes(group));
    }
}

enum GroupStatus {
    DefaultStatus,
    SomeStatus,
}

class Group {
    private _area: Area;
    private _status: GroupStatus = GroupStatus.DefaultStatus;
    private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
    private readonly _directionName: string;
    private readonly _levelName: string;

    constructor(directionName: string, levelName: string, area: Area) {
        this._directionName = directionName;
        this._levelName = levelName;
        this._area = area;
    }

    get area(): Area {
        return this._area;
    }

    set area(area: Area) {
        this._area = area;
    }

    get status(): GroupStatus {
        return this._status;
    }

    set status(status: GroupStatus) {
        this._status = status;
    }

    setStatus(status: GroupStatus) {
        this.status = status;
    }

    addStudents(...students: Student[]): void {
        this._students.push(...students);
    }

    removeStudents(...students: Student[]): void {
        this._students = this._students.filter(group => students.includes(group));
    }

    showPerformance(): Student[] {
        return this._students.toSorted((a: Student, b: Student) => b.getPerformanceRating() - a.getPerformanceRating());
    }

    get levelName(): string {
        return this._levelName;
    }

    get directionName(): string {
        return this._directionName;
    }
}

type Grades = { [workName: string]: number };

type Visits = { [lesson: string]: boolean };

class Student {
    private _firstName: string;
    private _lastName: string;
    private readonly _birthYear: number;
    private _grades: Grades = {};
    private _visits: Visits = {};

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(fullName: string) {
        [this._lastName, this._firstName] = fullName.split(' ');
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    setVisit(lesson: string, isVisited: boolean): void {
        this._visits[lesson] = isVisited;
    }

    getAttendancePercentage(): number {
        const visitsValues: boolean[] = Object.values(this._visits);
        const totalLessons: number = visitsValues.length;
        const attendedLessons: number = visitsValues.filter(present => present).length;
        return (attendedLessons / totalLessons) * 100
    }

    setGrade(workName: string, grade: number): void {
        this._grades[workName] = grade;
    }

    getAverageGrade(): number {
        const gradeValues: number[] = Object.values(this._grades);
        if (!gradeValues.length) return 0;
        return gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    }

    getPerformanceRating(): number {
        const averageGrade: number = this.getAverageGrade();
        if (averageGrade === 0) {
            return 0;
        }
        return (averageGrade + this.getAttendancePercentage()) / 2;
    }
}