import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  methods: ["GET", "PUT", "POST", "DELETE"],
}))
const port = process.env.PORT || 5000;





// Add your API Routes
// app.use("/api/auth", Auth);
// app.use("/api/user", User);
// app.use("/api/product", Product);
// app.use("/api/review", Review);
// app.use('/api/query', Query)
// app.use('/api/request', ProductRequest)
// app.use("/api/message", Messsage);




mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected With DB Successfull"))
  .catch((e) => console.log("Db Connection Failed"));


const server = app.listen(port, () => {
  console.log(`Server is Listening on PORT ${port}`);
})