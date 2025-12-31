import nodemailer from "nodemailer";
import { env } from "./env";

export const mailTransporter = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: Number(env.MAIL_PORT),
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASS
  }
});
mailTransporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mailtrap SMTP connection failed:", error);
  } else {
    console.log("✅ Mailtrap SMTP connection successful");
  }
});