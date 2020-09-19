import React from 'react';

class Auth{
    constructor(){
    }

    login = (userId) => {
        window.localStorage.setItem("userId", userId);
    }

    logout = (callback) => {
        window.localStorage.setItem("userId", null);
        callback();
    }

    checkAuthenticated = () => {
        let isValid = false;
        let userId = window.localStorage.getItem("userId");
        if(userId !== null && userId !== undefined){
            isValid = true;
        }
        console.log(userId);
        console.log(isValid)
        return isValid;
    }

}

export default new Auth();
