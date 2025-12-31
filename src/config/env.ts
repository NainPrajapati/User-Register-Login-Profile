import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT || "1111",
  MONGO_URL: process.env.MONGO_URL as string,
  JWT_SECRET: process.env.JWT_SECRET as string,

  MAIL_HOST: process.env.MAIL_HOST as string,
  MAIL_PORT: process.env.MAIL_PORT as string,
  MAIL_USER: process.env.MAIL_USER as string,
  MAIL_PASS: process.env.MAIL_PASS as string
};
