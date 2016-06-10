const users = [
    {
        fName: 'Alice',
        lName: 'Sir',
        city: 'Hyd'
    },
    {
        fName: 'Bob',
        lName: 'Prof',
        city: 'Che'
    },
    {
        fName: 'Caterine',
        lName: 'Mam',
        city: 'Hyd'
    }
];

const userByCity = (city) => {
   return
    users
        .filter(user => user.city === city);
}

const appendUserFirstAndLastName = (user) => {
    return user.fName + " " + user.lName;
}

const commaSeperateUser = (previousUser, user, index, users) => {
    console.log(previousUser, user, index, users);
    return previousUser + ", " + user;
}

//const userByCommaSeperated = () => {
//    return userByCity('Hyd').map(appendUserFirstAndLastName).reduce(commaSeperateUser);
//}

const userByCommaSeperated = () => {
    return
        users
        .filter(user => user.city === 'Hyd')
        .map(appendUserFirstAndLastName) // .map(user => user.fName + " " + user.lName)
        .reduce(commaSeperateUser); // .reduce((previoudUser, currentUser) => previousUser + ", " + currentUser)
}

console.log('userByCommaSeperated', userByCommaSeperated());
