// Functional implementation
import {tracks} from './tracks';

// Get List of unique user Ids
const userIds = () => {
    let userIdList = [];
    tracks.forEach(track => {
        if (userIdList.indexOf(track.userId) === -1) {
            userIdList.push(track.userId);
        }
    });

    return userIdList;
}
console.log('userIds', userIds());

// filter to get users by Id
const userById = (user, id) => user.userId === id;

const usersById = (id) => {
    return tracks.filter((track) => track.userId === id)
}
console.log('usersById', usersById(1));

// Users by Id and lat
const userByIdAndLat = (id, lat) => {
    return tracks.filter((track) => track.userId === id && track.lat === lat);
}
console.log('userByIdAndLat', userByIdAndLat(1, 17.567));

// filter by lat
// Reduce by Time Spent

//const userByLat = (lat, users) => {
//    users.forEach(user => {
//
//    }) ;
//}
