import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  const user = await AuthService.registerUser(req.body);
  res.status(201).json({ message: "Registered successfully", user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await AuthService.loginUser(email, password);
  res.json(data);
};

export const forgotPassword = async (req: Request, res: Response) => {
  await AuthService.forgotPassword(req.body.email);
  res.json({ message: "Reset password link sent to email" });
};
export const resetPassword = async (req: Request, res: Response) => {
  const { token, password } = req.body;
  await AuthService.resetPassword(token, password);
  res.json({ message: "Password reset successful" });
};


export const profile = async (req: any, res: Response) => {
  res.json(req.user);
};
