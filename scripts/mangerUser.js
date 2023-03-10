//  *  array quản lý post
import { LoginUser } from "./services/userServices";
const USER_KEY = "user";
class ManagerUser {
  static async getAll() {
    const data = await getAll();
    this.users = data;
  }
  static async login(username, password) {
    console.log("isLogin call");
    const data = await LoginUser(username, password);
    console.log("data", data.length);
    if (data.length > 0) {
      ManagerUser.saveUserData(data[0]);
      return true;
    }
    return false;
  }
  //create register form code
  static async register(username, password) {
    console.log("isLogin call");
    const data = await LoginUser(username, password);
    console.log("data", data.length);
    if (data.length > 0) {
      ManagerUser.saveUserData(data[0]);
      return true;
    }
    return false;
  }
  //save data Register
  static saveUserData(data) {
    localStorage.setItem(USER_KEY, JSON.stringify(data));
  }
  static checkLogin() {
    if (localStorage.getItem(USER_KEY)) return true;
    return false;
  }
  static getUser() {
    console.log("call data getUser");
    if (localStorage.getItem(USER_KEY)) {
      console.log(
        "call data user key",
        JSON.parse(localStorage.getItem(USER_KEY))
      );
      return JSON.parse(localStorage.getItem(USER_KEY));
    }
    return null;
  }
  //logout
  static logout() {
    if (localStorage.getItem(USER_KEY)) {
      localStorage.removeItem(USER_KEY);
    }
  }
}
export default ManagerUser;
