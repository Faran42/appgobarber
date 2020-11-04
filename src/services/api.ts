import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333', // no emulador do android studio, o ip 10.0.2.2 corresponde ao localhost
});

export default api;
