import { Temporal } from "@js-temporal/polyfill";
import { Student, isStudent, parseStudent } from "./models/student.model";

// Exercise 2: Test constraints
const student: Student = {
  id: "STU-001",
  name: "Hana Tadesse",
  enrollmentDate: Temporal.Now.instant(),
};

// Uncommenting the next line should produce a readonly error:
// student.id = "STU-999";

// Uncommenting the next line should produce a null-safety error:
// console.log(student.gpa.toFixed(2));

// Safe optional access:
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");

// Exercise 3: Type guard test
function processStudent(raw: unknown) {
  if (isStudent(raw)) {
    const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
    console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
  } else {
    console.error("Invalid student data received");
  }
}

processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
processStudent(42);

// Exercise 3 Part B: Parse function test
console.log(parseStudent({ id: "STU-001", name: "Hana" }));

// Uncommenting the next line should throw a descriptive TypeError:
// parseStudent({ id: 42, name: "Test" });
