import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:4000' });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;
// });

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, data) =>  API.put(`/user/${id}`, data);
export const getAllUsers = ()=> API.get('/user');
//deleteuser

export const rating = (id, userId)=>API.put(`/movies/${id}/like`, {userId: userId});
export const review = (value, id) => API.post(`/movies/${id}/review`, { value });

export const login = (formData) => API.post('/user/login', formData);
export const signup = (formData) => API.post('/user/signup', formData);