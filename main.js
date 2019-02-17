const people = [
    {
        name: "Andrew",
        gender: "male",
        age: 19,
        country: "USA"
    },
    {
        name: "Britney",
        gender: "female",
        age: 31,
        country: "Peru"
    },
    {
        name: "Conan",
        gender: "male",
        age: 38,
        country: "Netherlands"
    },
    {
        name: "Sharon",
        gender: "female",
        age: 41,
        country: "Latvia"
    }
];

console.log(people);

// first possibility (my own, working)
function sortByGenderAndAge() {
    const sortedPeople = people
        .sort((a, b) => {
            if (a.gender > b.gender) {
                return 1;
            } 
            if (a.gender < b.gender) {
                return -1
            }
            return 0;
            }
        )
        .filter(person => person.age > 30)
        .filter(pers => pers.age < 40);
    document.getElementById("people").innerHTML = sortedPeople;
    console.log(sortedPeople);    
};      

// second possibility (from github, not working)
// function peopleFilterByGenderAndAge(people) {
//     function sortByGender(people){
//         return people.sort((a, b) => {
//             if (a.gender > b.gender) {
//                 return 1;
//             }
//             if (a.gender < b.gender) {
//                 return -1;
//             }
//             return 0;
//         });
//     }
//     console.log(people);

//     function sortByAge(min, max) {
//         return people.filter(person => {
//             if (person.age > min && person.age < max) {
//                 return person;
//             }
//         });
//     }
//     return sortByGender(sortByAge(people, 30, 40));
// }

