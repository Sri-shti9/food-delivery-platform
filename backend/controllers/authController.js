const users = require("../data/users");

const signup = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({
      success: false,
      message: "All fields are required"
    });
  }

  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.json({
      success: false,
      message: "User already exists"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(newUser);

  res.json({
    success: true,
    message: "Signup successful",
    user: newUser
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password required"
    });
  }

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.json({
      success: false,
      message: "User not found"
    });
  }

  if (user.password !== password) {
    return res.json({
      success: false,
      message: "Invalid password"
    });
  }

  res.json({
    success: true,
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

module.exports = { signup, login };