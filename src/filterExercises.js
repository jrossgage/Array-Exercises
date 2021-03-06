import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort

export const getStudentsInCohort = (cohort) => {
    let studentsInCohortArr = students.filter(student => student.cohort === cohort)
    return studentsInCohortArr
} 

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students

export const getFullTimeStudents = () => {
    const fullTimeStudents = students.filter(eachStudent => eachStudent.fullTime)
    return fullTimeStudents
}
            
// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor

export const getStudentsByInstructorId = (instructorId) => {
    let studentsWithInstructor = students.filter(eachStudent => eachStudent.instructorId === instructorId) 
        return studentsWithInstructor
}

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned

export const getPolyglotStudents = (languageCount) => {
    const polyglotStudents = students.filter(eachStudent => eachStudent.languages.length >= languageCount)
        return polyglotStudents
}

// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students

export const getAvailableInstructors = () => {
            const instructorIds = students.map(student => {
                return student.instructorId
            })
            const availableInstructors = instructors.filter(instructor => !instructorIds.includes(instructor.id))
            return availableInstructors
}

// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method

export const getStudentsByLanguage = (language) => {
    const studentsByLanguage = students.filter(eachStudent => eachStudent.languages.some(element => element === language))
    return studentsByLanguage
}


/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
