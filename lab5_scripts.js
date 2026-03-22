/* LAB 5 - STUDENT MANAGEMENT SYSTEM */


let students = [];              // array for student records



/* MEMBER 1 - Generate current time 
MUST return the following in the format:

"Today is March 20, 2026, Friday.
The current time is 11:45 AM."      */

document.getElementById("date_btn").addEventListener("click", time_now);
function time_now(){
    const now = new Date();

    const date = now.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
    const wd = now.toLocaleDateString('en-US', {weekday: 'long'})
    const time = now.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});

    const msg = `Today is ${date}, ${wd}. \nThe current time is ${time}.`;

    document.getElementById("time_output").innerText = msg;
}


/* MEMBER 2 - Add object to the students array 
MUST create object named "Student" that stores 
properties in the array when submit is clicked     */



document.getElementById("submit_btn").addEventListener("click", add_student);

function add_student(){
    
    // Grab values from the HTML inputs
    let nameInput = document.getElementById("name").value;
    let ageInput = parseInt(document.getElementById("age").value);
    let emailInput = document.getElementById("email").value;
    let courseInput = document.getElementById("course").value;
    
    let errorDisplay = document.getElementById("form_error");
    let idDisplay = document.getElementById("student_id_display");

    // Run the validation utility
    let validationStatus = validate_input(nameInput, ageInput, emailInput, courseInput);

    if (validationStatus !== "valid") {
        // Display the error message and stop the function
        errorDisplay.textContent = validationStatus;
        return; 
    }

    // Clear any existing error messages if validation passes
    errorDisplay.textContent = "Student successfully registered!";
    errorDisplay.style.color = "green";

    // Generate the unique ID
    let newStudentId = generate_student_number();

    // Create the new Student object
    let newStudent = new Student(newStudentId, nameInput, ageInput, emailInput, courseInput);

    // Add the object to the global array
    students.push(newStudent);

    // Update the UI to show the generated ID
    idDisplay.textContent = newStudentId;

    // Log it to the console to verify it worked
    console.log("Current Students Array:", students);
    
    // Reset the form fields for the next entry
    document.getElementById("student_form").reset();



}


/* MEMBER 3 - Search students through Student ID 
MUST display Student properties inputted by user
using Student ID and displays error when object 
does not exist                                      */ 
document.getElementById("search_btn").addEventListener("click", find_student);
function find_student(){

    let id = document.getElementById("search_id").value;

    let student = students.find(student => student.studentNumber === id);  // anonymous function for finding student

    // check if student no. is not in student
    if (!student) {
        document.getElementById("search_result").innerText =
            "Student record does not exist! Try a different ";
        return;         // stop immediately
    }

    // store results
    let result =
        "Student Number: " + student.studentNumber + "<br>" +
        "Name: " + student.name + "<br>" +
        "Age: " + student.age + "<br>" +
        "Email: " + student.email + "<br>" +
        "Course: " + student.course;

    // return results to site
    document.getElementById("search_result").innerText = result;


}


/* MEMBER 4 - Display properties of students 
MUST display all objects (values) in the array       */ 
document.getElementById("display_btn").addEventListener("click", display_list);
function display_list(){




}



// Blueprint for the Student object
class Student {
    constructor(studentNumber, name, age, email, course) {
        this.studentNumber = studentNumber;
        this.name = name;
        this.age = age;
        this.email = email;
        this.course = course;
    }
}

// Generate random and unique student_number ("2024" + 5 random digits) 
function generate_student_number() {
    let isUnique = false;
    let newId = "";
    
    while (!isUnique) {
        // Generate a random 5-digit number (between 10000 and 99999)
        let randomDigits = Math.floor(Math.random() * 90000) + 10000;
        newId = "2024" + randomDigits;

        // Check the global students array to see if this ID already exists
        let duplicate = students.find(student => student.studentNumber === newId);
        if (!duplicate) {
            isUnique = true; 
        }
    }
    return newId;
}

// Validate inputs from the users once entered
function validate_input(name, age, email, course) {
    // Check Name: > 5 chars and contains a whitespace
    if (name.length <= 5 || !name.includes(" ")) {
        return "Error: Name must be more than 5 characters and contain a space.";
    }
    // Check Age: > 18 and < 99
    if (isNaN(age) || age <= 18 || age >= 99) {
        return "Error: Age must be a number greater than 18 and less than 99.";
    }
    // Check Email: ends with @up.edu.ph
    if (!email.endsWith("@up.edu.ph")) {
        return "Error: Email must end with @up.edu.ph.";
    }
    // Check Course: make sure one is selected
    if (course === "") {
        return "Error: Please select a course.";
    }
    
    return "valid"; 
}
