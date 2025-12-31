import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const authMiddleware = async (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
  req.user = await User.findById(decoded.userId).select("-password");
  next();
};
