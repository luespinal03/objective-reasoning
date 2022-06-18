// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
///////////////////////////////////////////////////////////////////////////////
// 1. 

let user1 = {
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
}
//=> false

let user2 = {
    firstName: 'Ian',
    lastName: 'Rogers',
    userRole: 'USER_MANAGER'
}
//=> false

let user3 = {
    firstName: 'Jeff',
    lastName: 'Wilson',
    userRole: 'ADMIN'
}
//=> true





function isAdmin(user) {
    if (user.userRole === 'ADMIN') {
        return true;
    } else {
        return false;
    }
}

console.log(isAdmin(user1))
console.log(isAdmin(user2))
console.log(isAdmin(user3))

///////////////////////////////////////////////////////////////////////////////
// 2. 



let user4 = {
    firstName: 'Luis',
    lastName: 'Espinal'
} // } => 'anthony.derosa@codeimmersives.com'


function getEmail(user) {
    return (`${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`)
}

console.log(getEmail(user4))


///////////////////////////////////////////////////////////////////////////////
// 3.


let playlist1 = {
    name: 'hits',
    songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road (remix)']
}


getPlaylistLength({
    name: 'empty playlist',
    songs: []
})



function getPlaylistLength(playlist1) {
    return playlist1.songs.length
}

console.log(getPlaylistLength(playlist1))


///////////////////////////////////////////////////////////////////////////////
// 4.

let hardestHomework1 = [] // empty array
// => ''

let hardestHomework2 = [ // array of objects with properties and values
    {
        name: 'homework 1', // hardestHomework[0].averageScore gives us access  to the averageScore in the first object in the hardestHomework array. Therefore, once we are in we have the ability to put that access on a loop, thus allowing us to continue gaining access to the rest of the averageScore's from any array we access.
        averageScore: 99
    },
    {
        name: 'homework 2',
        averageScore: 1
    }
]
// => 'homework 2'

let hardestHomework3 = [ // array of objects with properties and values
    {
        name: 'hip-hip-array',
        averageScore: 12
    },
    {
        name: 'wait-i-object',
        averageScore: 200
    },
    {
        name: 'objective-reasoning',
        averageScore: 25
    }
]
// 'hip-hip-array'


// Greyson's logic
// function lowestNumber(arr) {
//     let lowest = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < lowest) {
//             lowest = arr[i]
//         }
//     }
//     return lowest;
// }
// let myArray = [7, 3, 15, 40, 1]
// console.log("Lowest: ")
// console.log((lowestNumber(myArray)))


// Greyson's logic


// to access properties of object inside an array:
// arrayName[index].property



function getHardestHomework(hardestHomework) {
    if (hardestHomework.length === 0) { // if the array is empty then return nothing
        return '';
    }

    let lowestScore = hardestHomework[0].averageScore; // already storing a value, its not the lowest score as of now, but it doesnt matter because we are going to compare it to the other values in the array. By the end of the process it will only hold the lowest value
    let lowestHwName = hardestHomework[0].name // stores the name of the lowest score stored. it will begin by holding the value of 'homework 1' but that will change once we find the actual assingment with the lowest score. 

    for (let i = 0; i < hardestHomework.length; i++) {

        if (hardestHomework[i].averageScore < lowestScore) {
            lowestScore = hardestHomework[i].averageScore;
            lowestHwName = hardestHomework[i].name;
        }
    }
    return lowestHwName;
}

console.log(getHardestHomework(hardestHomework1));
console.log(getHardestHomework(hardestHomework2));
console.log(getHardestHomework(hardestHomework3));


////////////////////////////////////////////////////////////////////////////////
// 5. 



function createPhonebook(namesArray, numbersArray) {
    if (namesArray.length === 0) {
        return {};
    } // in case there is a blank array

    let phonebook = {}; // empty array to insert names with number values from the loop
    for (let i = 0; i < namesArray.length; i++) {
        phonebook[namesArray[i]] = numbersArray[i]; // giving indexes from namesArray the value of corresponding numbersArray
    }
    //console.log(namesArray[1]) me messing around to see it working
    return phonebook;

}



                                //   [0]      [1]      [2]
let phonebook1 = createPhonebook(['Jimothy', 'Maria', 'Karl'], ['1234567890',
//                                 the names = namesArray          the numbers = numbersArray          
'000-000-0000', '999-888-7766'
])

console.log(phonebook1);
                                //  [0]         [1]
let phonebook2 = createPhonebook(['Melissa', 'Andre'], ['206-111-2233', '321-123-2424'])

console.log(phonebook2);

let phonebook3 = createPhonebook ([], [])

console.log(phonebook3)












// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};