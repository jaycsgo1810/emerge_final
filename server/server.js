const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");
const contactRouter = require("./routes/contactRouter");
const smsRoutes = require('./routes/smsRoutes');
const feedbackRouter = require('./routes/feedbackRouter')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/feedback", feedbackRouter);
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(smsRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {});
