module objects {
   

    export class Student extends Person {
        // private instance varibales
        private _studentID: string;

        // public properties
        get studentID(): string {
            return this._studentID;
        }
        set studentID(newID: string) {
            this._studentID = newID;
        }

        // constructors
        constructor(age: number, name: string, studentID: string) {
            super(age, name);
            this.studentID = studentID;
        }

        // private methods

        public studies(): void {
          //  console.log(`%c $(this.name) is studying and has a sstudentId of $(this.)`)
          console.log(`%c ${this.name} is studying and has a studentID of ${this.studentID}`,
        "font-size: 18px; color:green;");
        }

    }
}