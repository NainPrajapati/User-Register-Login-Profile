import app from "./app";
import "./config/mail";
import { connectDB } from "./config/db";
import { env } from "./config/env";

connectDB();

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
});

console.log("MAIL_HOST:", process.env.MAIL_HOST);
console.log("MAIL_USER:", process.env.MAIL_USER);


