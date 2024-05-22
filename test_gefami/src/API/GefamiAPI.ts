import axios from 'axios';

export const GefamiAPIs = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
});
