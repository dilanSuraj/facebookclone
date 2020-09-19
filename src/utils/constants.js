const API_URL = 'http://facebook-clone-api.herokuapp.com/';
const USER_API = 'users/';
const EMAILREGX=  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const PHONENUMBERREGX=RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g); 

const USER_HEADER_INFO = {
    //'x-bconic-account-token': SURVEY_CLIENT_TOKEN_HEADER_VALUE,
    "Content-Type":"application/json"
}

const API_HEADER_INFO = {
    "Content-Type":"application/json"
}

export default {
    API_URL,
    USER_API,
    EMAILREGX,
    PHONENUMBERREGX,
    API_HEADER_INFO,
    USER_HEADER_INFO
}