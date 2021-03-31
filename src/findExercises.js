import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)

export const getStudentById = (id) => {
    const studentById = students.find(student => student.id === id)
    return studentById
}

// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)

export const getInstructorById = (id) => {
    const instructorById = instructors.find(instructor => instructor.id === id)
    return instructorById
}

// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")

export const getStudentByLastName = (lastName) => {
    const studentByLastName = students.find(student => student.lastName.toLowerCase() === lastName.toLowerCase())
    return studentByLastName
}

// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")

export const getStudentByName = (fullName) => {
    const studentByName = students.find(student => student.firstName.toLowerCase() + ' '  + student.lastName.toLowerCase() === fullName.toLowerCase())
    return studentByName 
}

// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long

export const getInstructorOfStudent = (studentId) => {
    const studentObj = students.find(student => student.id === studentId);
    const instructorOfStudent = instructors.find(instructor => instructor.id === studentObj.instructorId)
    return instructorOfStudent 
}

// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate

export const getStudentWithMostLangs = () => {
    const studentLanguages = student.map(student => {
        return student.languages 
    })
      for (i = 0; i < studentLanguages.length; i++)
      if (studentLanguages[i].length)
}