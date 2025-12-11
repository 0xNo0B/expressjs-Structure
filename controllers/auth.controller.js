import bcrypt from "bcryptjs";
import { User } from "../models/User.model.js";
import { signToken } from "../utils/jwt.js";

// =======================
// LOGIN
// =======================
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = signToken(payload);

    return res.json({
      message: "Login successful",
      token,
      user: payload,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}

// =======================
// LOGOUT
// =======================
export function logout(req, res) {
  return res.json({ message: "Logged out successfully" });
}
