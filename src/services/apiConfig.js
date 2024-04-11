import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    const token = localStorage.getItem("token");
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyOTMxNzg3LCJpYXQiOjE3MTI4NDUzODcsImp0aSI6IjJmMzMxNGJjZDBkNDQzYzM4ZDk3NDFlODk3ZWU1MTlmIiwidXNlcl9pZCI6OH0.mKHWR-6geM90TT128QfBM4UQgTRPvsiTy6pg-d8CTU4"
    resolve(token ? `Bearer ${token}` : null);
  });
};

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://duoq-app.herokuapp.com"
      : "http://127.0.0.1:8000",
});

api.interceptors.request.use(
  async function (config) {
    const token = await getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;