import mongoose from "mongoose";

import { devConfig } from "./developmentVariables";

export const connectDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(   
    `mongodb+srv://${devConfig.DB_USER}:${devConfig.DB_PASSWORD}@studentactivitydb.yb8s7zp.mongodb.net/${devConfig.DB_NAME}`
  );
  console.log("🚀 [database]: Connected to mongodb database");
};
