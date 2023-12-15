const User = require("./../Models/UserModel");
class AuthController {
  async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "Tài khoản hoặc mật khẩu không đúng",
      });
    }
    return res.status(200).json({
      status: "success",
      id: user.email,
      message: "Đăng nhập thành công",
    });
  }
  async register(req, res) {
    console.log("OKKKK");
    const { username, email, password } = req.body;
    console.log(username);

    const user = await User.create({
      username,
      email,
      password,
    });
    console.log(user);
    return res.status(200).json({
      status: "success",
      id: user.email,
      message: "Đăng nhập này công",
    });
  }
}
module.exports = new AuthController();
