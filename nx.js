function retrievePeople(people) {
    function sortByGender(people) {
        return people.sort((personA, personB) => {
            if (personA.gender > personB.gender) {
                return 1;
            }
            if (personA.gender < personB.gender) {
                return -1;
            }
            return 0;
        });
    }

    function filterAge(people, min, max) {
        return people.filter(person => {
            if (person.age > min && person.age < max) {
                return person;
            }
        });
    }
    return sortByGender(filterAge(people, 30, 40));
}