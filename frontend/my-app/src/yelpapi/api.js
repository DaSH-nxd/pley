//import {API_BASE_URL, BEARER_TOKEN} from './config';
import queryString from 'query-string'

export function get(path, queryParams) {
    const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';
    //TODO: hide this with .env file
    const BEARER_TOKEN = 'zr1LQ6PYhBBQ1RwwudHsvjIVhb8h45Tt3oPJ6HCmkn0m4TPdOelcjmwVMQUqCz-yAyyRxeDxBQdjR3kWjmyf1W9sIhPDJxqeWqc5gHSPpJOwCJ6sTElU2QvVzGtXYnYx';
    //const BEARER_TOKEN = process.env.REACT_APP_API_KEY;
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}