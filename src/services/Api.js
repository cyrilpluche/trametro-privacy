import axios from 'axios';

const BASE_URL = 'http://trametro.herokuapp.com/api/'
const TRAVELER_ID = 'trametro-application'
const SESSION_ID = 'trametro-application'

const apiMethods = {
    BASE_URL,
    TRAVELER_ID,
    SESSION_ID,

    get (url) {
        // axios.defaults.headers.common['Authorization'] = token
        return axios.get(BASE_URL + url)
    },

    post (url, payload) {
        // axios.defaults.headers.common['Authorization'] = token
        return axios.post(BASE_URL + url, payload)
    },

    put (url, payload) {
        // axios.defaults.headers.common['Authorization'] = token
        return axios.put(BASE_URL + url, payload)
    },

    delete (url) {
        // axios.defaults.headers.common['Authorization'] = token
        return axios.delete(BASE_URL + url)
    },
}

export default apiMethods
