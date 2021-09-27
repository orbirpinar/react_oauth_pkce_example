import axios from "axios";
import qs from 'qs';

const baseUrl = "http://localhost:8100/api";
const instance = axios.create();
instance.interceptors.request.use(
  function (config) {
    config.baseURL = baseUrl;
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    config.headers.accept = "application/json"
    //console.log(localStorage.getItem('token'));
    // config.headers.accept = "*/*";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // console.log(response);
    return response;
  },
  function (error) {
    //TODO: STATUS CODE SWITCH error.response.status
    const originalConfig = error.config;
    console.log(originalConfig);

    if (error.response.status === 401 && !originalConfig._retry) {
       originalConfig._retry = true; 
      

      // TODO 
      // REFRESH token ile access token alacagiz
      //  --- localStorage destory
      // REFRESH TOKEN TUKENDIYSE logout ol
      // -- localstorage destroy 
      // localStorage.clear();
      refreshToken(originalConfig);

    }
    return Promise.reject(error);
  }
);

const refreshToken = (originalConfig:any) => {
  
var data = qs.stringify({
  'grant_type': 'refresh_token',
  'client_id': '1841c34d-b8bc-4684-8ccb-fc3d2d638e8f',
  'scope': '',
  'refresh_token': localStorage.getItem("refreshToken") 
});

axios({
  method: 'post',
  url: 'http://localhost:8100/oauth/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
})
.then(function (response) {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken")
  localStorage.setItem("token",response.data.access_token)
  localStorage.setItem("refreshToken",response.data.refresh_token)
  return instance(originalConfig);
})
.catch(function (error) {
  console.log(error);
});
} 

export default instance;