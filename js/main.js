import users from "./users.js";

const spc = '_ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _';

// 1-st task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// const getUserNames = users => {
//     return users.map(user => user.name);
//   };
const getUserNames = users => users.map(user => user.name);

  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
  console.log(spc);

// 2-nd task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => color === user.eyeColor);
  };

  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
  console.log(spc);

  //3-d task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const getUsersWithGender = (users, gender) => {
    return users
    .filter(user => gender === user.gender)
    .map(user => user.name);
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  console.log(spc);

  //4-th task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const getInactiveUsers = users => {
    return users.filter(user => !user.isActive);
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
  console.log(spc);

  //5-th task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const getUserWithEmail = (users, email) => {
    return users.find(user => email === user.email);
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
  console.log(spc);

  //6-th task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age > min && user.age < max);
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
  console.log(spc);

  //7-th task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const calculateTotalBalance = users => {
    return users.reduce((acc, item) => {
        return acc + item.balance;
    }, 0);
  };
  console.log(calculateTotalBalance(users)); // 20916
  console.log(spc);

  //8-th task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const getUsersWithFriend = (users, friendName) => {
    return users
    .filter(user => {
        if(user.friends.includes(friendName)) {
            return user;
        }
    })
    .map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
  console.log(spc);

  //9-th task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const getNamesSortedByFriendsCount = users => {
    const compareByQuantityFriends = (prev, next) => {
        return prev.friends.length - next.friends.length;
    }
    return users
    .slice()
    .sort(compareByQuantityFriends)
    .map(user => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
  console.log(spc);

  //10-th task -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  const getSortedUniqueSkills = users => {
    // return users
    // .reduce((acc, item) => {
    //     acc.push(...item.skills)

    //     return acc;
    // }, [])
    // .filter((item, index, arr) => {
    //     if(arr.indexOf(item) !== index) {
    //         return;
    //     }
    //     return item;
    // })
    // .sort();
    return users
    .reduce((acc, item) => {
        acc.push(...item.skills)

        return acc;
    }, [])
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort();
  };
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
