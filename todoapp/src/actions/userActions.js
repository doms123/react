export function fetchUsers() {
    return {
        type: "FETCH_USER_FULLFILLED",
        payload: {
            name: 'Doms',
            age: 22
        }
    }
}

export function setUsername(name) {
    return {
        type: 'SET_USERNAME',
        payload: name
    }
}

export function setUserAge(age) {
    return {
        type: 'SET_USER_AGE',
        payload: age
    }
}