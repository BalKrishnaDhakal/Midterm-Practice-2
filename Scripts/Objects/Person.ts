module objects {
    export abstract class Person {
        // private instance variables
        private _age: number;
        private _name: string;


        //public properties
        get name(): string {
            return this._name;
        }
        set name(newName: string) {
            this._name;
        }
        get age(): number {
            return this._age;
        }
        set age(newAge: number) {
            this._age;
        }

        constructor(age: number, name: string) {
            this._age = age;
            this._name = name;

        }
        // private instance variables
        //public properties

        public saysHello() {
            console.log(`%c ${this._name} says hello!`, "font-size:20px;")
        }
    }

   
}