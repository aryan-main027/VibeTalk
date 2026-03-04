import dotenv from "dotenv";
dotenv.config();
import e from "express";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import path from "path";
import { connectDB } from "./lib/db.js";

const app = e();
const __dirname = path.resolve();

app.use(e.json());

app.use("/api/auth",authRouter);
app.use("/api/messages",messageRouter);

const PORT = process.env.PORT || 5000;


// make ready for deployment
if(process.env.NODE_ENV === "production"){
  app.use(e.static(path.join(__dirname,"../frontend/dist")))

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
  })
}


const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

startServer();