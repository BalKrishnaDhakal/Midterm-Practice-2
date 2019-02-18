"use script";
// self-executing annonymous function
// IIFF -- Immediately Invoked Function Expression

// IIFF -- Immediatlely Invoked Function Expression
(function(){

    function Start(){
        let student: objects.Student;
 student = new objects.Student(20, "David", "O12345");
student.saysHello();
student.studies();
    }
    window.addEventListener("load",Start);
})();


