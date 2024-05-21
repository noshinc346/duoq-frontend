import { jwtDecode } from "jwt-decode";


const AuthService = {
  getLoggedInUserId: () => {
    const token = localStorage.getItem("token"); // Assuming token is stored in local storage
    console.log(token)
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded.user_id)

      return decoded.user_id; // Assuming the token has a field named userId
    }
    return null;
  },
};

export default AuthService;
