//hide the auth api key
require('dotenv').config();

export const API_BASE_URL = 'httpL//api.yelp.com/v3';

export const BEARER_TOKEN = process.env.API_KEY;