import express from "express";
import router from "./routes/v1Router";
import 'dotenv/config'
const JWT_SECRET = require("@repo/backend-commons/config")

const app = express();

app.use(express.json());

app.use("/api/v1", router); 

const PORT: number = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(JWT_SECRET)
});
