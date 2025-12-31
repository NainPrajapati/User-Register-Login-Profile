import User from "../models/user.model";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";
import crypto from "crypto";
import { mailTransporter } from "../config/mail";

/* =========================
   REGISTER USER
========================= */
export const registerUser = async (data: any) => {
  const hashedPassword = await hashPassword(data.password);

  const user = await User.create({
    ...data,
    password: hashedPassword,
  });

  return user;
};

/* =========================
   LOGIN USER
========================= */
export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user._id.toString());

  return { user, token };
};

/* =========================
   FORGOT PASSWORD
   (Generate token + send email)
========================= */
export const forgotPassword = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  // Generate secure token
  const token = crypto.randomBytes(32).toString("hex");

  // Save token + expiry
  user.resetToken = token;
  user.resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
  await user.save();

  const resetLink = `http://localhost:3000/reset-password?token=${token}`;

  // Send email
  await mailTransporter.sendMail({
  from: "User Auth App <no-reply@mailtrap.test>",
  to: user.email,
  subject: "Reset Your Password",
  text: `Reset your password using this link: ${resetLink}`,
  html: `
    <h3>Password Reset</h3>
    <p>Click below to reset your password:</p>
    <a href="${resetLink}">${resetLink}</a>
  `
});

console.log("📨 Email handed off to Mailtrap");
};

/* =========================
   RESET PASSWORD
========================= */
export const resetPassword = async (token: string, newPassword: string) => {
  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: new Date() }
  });

  if (!user) {
    throw new Error("Invalid or expired reset token");
  }

  // Hash new password
  user.password = await hashPassword(newPassword);

  // Clear reset fields
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;

  await user.save();

  return true;
};
