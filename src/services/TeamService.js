import axios from 'axios';

let getTeam = () => {
    return axios.get('http://api-social.test/api/team',{headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }})
};

let myTeam = () => {
    return axios.get('http://api-social.test/api/myteam',{headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }})
};

let tuTeam = () => {
    return axios.get('http://api-social.test/api/tuteam',{headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }})
};

let joinTeam = (team) => {
    return axios.post('http://api-social.test/api/jointeam',team,{headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }})
};

export {
    getTeam,
    myTeam,
    joinTeam,
    tuTeam
}