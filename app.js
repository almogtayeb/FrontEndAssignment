import express from "express";
import http from "http";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(express.static(__dirname + "/src"));
app.use('/scripts/react-bootstrap', express.static(__dirname + '/node_modules/react-bootstrap/dist/'));
app.use('/scripts/axios', express.static(__dirname + '/node_modules/axios/dist'));
app.use('/scripts/popper.js', express.static(__dirname + '/node_modules/popper.js/dist/umd/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
