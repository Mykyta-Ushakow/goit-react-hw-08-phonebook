// import axios from 'axios';

// // export const authApi = axios.create({
// //   baseURL: 'https://connections-api.herokuapp.com/',
// // });

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// export const setToken = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// export const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const registrationAPI = async body => {
//   const { data } = await axios.post('users/signup', body);
//   setToken(data.token);
//   console.log(data);

//   return data;
// };

// export const loginAPI = async body => {
//   const { data } = await axios.post('users/login', body);
//   setToken(data.token);
//   console.log(data);

//   return data;
// };
