import express from 'express';
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes";
import path from "path";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors({ credentials: true }));

routes(app);

export default app;