
use('CallAge');

// Insert a few new cources into the Cources collection.
db.getCollection('cources').insertMany([
    {
        "name": "Java",
        "price": 20000,
        "instructor": "Harry"
    },
    {
        "name": "JavaScript",
        "price": 15000,
        "instructor": "John"
    },
    {
        "name": "Python",
        "price": 18000,
        "instructor": "Emily"
    },
    {
        "name": "C++",
        "price": 17000,
        "instructor": "Alice"
    },
    {
        "name": "MongoDB",
        "price": 22000,
        "instructor": "David"
    }
]);

//print the message to the output window
console.log("done inserting cources");