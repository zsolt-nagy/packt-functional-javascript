const students = [
    {
        id: 1,
        name: 'Marcus',
        birthDate: '1997-12-11'
    },
    {
        id: 2,
        name: 'Andrea',
        birthDate: '1993-09-08'
    },
    {
        id: 3,
        name: 'Max',
        birthDate: '1994-11-14'
    }
];

const tests = [
    {
        id: 1,
        studentID: 1,
        title: 'Fractals',
        score: 0.5
    },
    {
        id: 2,
        studentID: 1,
        title: 'Functional Programming',
        score: 0.75
    },
    {
        id: 3,
        studentID: 2,
        title: 'Functional Programming',
        score: 0.96
    }
];

/*
SELECT students.name AS studentName,
       tests.title AS testTitle,
       tests.score AS testScore
FROM tests
JOIN students
ON students.id = tests.studentID;
*/
const studentTests = tests.map( test => {
    const student = students.find( student =>
        student.id === test.studentID );
    return {
        studentName: student.name,
        testName: test.name,
        testScore: test.score
    };
} );

console.table( studentTests );

/*
SELECT students.name AS studentName,
       COUNT( tests.id ) AS testCount
FROM students
LEFT JOIN tests
ON students.id = tests.studentID
GROUP BY students.id
*/
const StudentTestCount = students.map( student => {
    const filteredTests = tests.filter( test =>
        test.studentID === student.id );
    const testCount = filteredTests.length;
    return {
        studentName: student.name,
        testCount
    };
} );

console.table( StudentTestCount );
