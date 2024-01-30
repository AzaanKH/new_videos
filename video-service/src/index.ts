import express, { Express } from "express";
import ffmpeg from "fluent-ffmpeg";

const app: Express = express();

const port: number = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Listening on port ${port}`));
