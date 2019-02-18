var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this._age = age;
            this._name = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            //public properties
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age;
            },
            enumerable: true,
            configurable: true
        });
        // private instance variables
        //public properties
        Person.prototype.saysHello = function () {
            console.log("%c " + this._name + " says hello!", "font-size:20px;");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=Person.js.map