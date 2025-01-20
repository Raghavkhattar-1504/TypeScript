interface user {
    name : string;
    readonly id : number;
    bio? : string;
    friends : user[];
}

interface profile extends user {
    url : string;
} 

const  addFriends = (user1 : user, ...users: user[] ) : user => {
    user1.friends = [...users];
    return user1;
}

const user1 : user = {
    name : "Raghav",
    id : 2,
    friends : []
}

const user2 : user = {
    name : "Raghav",
    id : 3,
    friends : []
}
const user3 : user = {
    name : "Raghav",
    id : 4,
    friends : []
}

addFriends(user1, user2, user3);

console.log(user1.friends);