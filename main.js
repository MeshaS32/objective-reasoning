// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘



function isAdmin(user){
    if(user.userRole === "ADMIN" ){
       
        return true
    }else{
        return false;
    }
}
let user1 ={
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
}

let user2 = {
    firstName: 'Ian',
    lastName: 'Rogers', 
    userRole: 'ADMIN'
}

 console.log(isAdmin(user1))
 console.log(isAdmin(user2))

function getEmail(email){
    email = (`${email.firstName}.${email.lastName}@codeimmersives.com`);

    return email.toLowerCase()
    }
    let emailAddress = {
        firstName: "Kamesha",
        lastName: "Hamilton",
    }

console.log(getEmail(emailAddress))

function getPlaylistLength(playlist){

    return playlist.songs.length;
}

console.log(getPlaylistLength({

    name: "my songs",
    songs: ["Happy", "Lets party", "people"]
}))

function getHardestHomework(assignments){
    let lowestHw = assignments[0]//object

    for(let i = 0; i < assignments.length; i++){
        if(assignments[i].averageScore < lowestHw.averageScore){
            lowestHw = assignments[i];
        }
}
return lowestHw.name;
}

console.log(getHardestHomework([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
]))

function createPhonebook(namesArray, numbersArray){
    
    let phonebook = {};

    for(let i = 0; i < namesArray.length; i++){
        phonebook[namesArray[i]] = numbersArray[i]
}
return phonebook
}
console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', 
'000-000-0000', '999-888-7766']))
   



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