import axios from "axios";


const api = axios.create({
  baseURL: 'https://thepeopleshouse.co/api/',
  headers: {
    // "Content-Type": "multipart/form-data",
  //  " Access-Control-Allow-Origin":"*",
  //  "Access-Control-Allow-Headers":"*",
  "Content-Type": "application/json"
  },
});

const TokenGettingtoken = async () => {
  const cookieName = "token";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      const token = cookie.substring(cookieName.length + 1);
      return token;
      break;
    }
  }
  return null;
};

api.interceptors.request.use(
  async (config) => {
    const token1 = await TokenGettingtoken();
  
    if (token1?.length > 0) {
      config.headers.Authorization = `token ${token1}`;
    } 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;