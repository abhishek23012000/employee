// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// //MIDDILWARES

// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors());



// const employeeRoutes = require("./routes/employeeRoutes");




// //ROUTES
// app.use("/api/employee", employeeRoutes);



// const PORT = process.env.PORT || 3000;



// const uri =
//   "mongodb://localhost/intern";

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {

//     console.log("Database Connected");
//     console.log("server Started on PORT", PORT);
//   })
//   .catch((err) => {
//     console.log("Error in connecting to DataBase", err.message);
//   });


const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const cors = require("cors");
const morgan = require("morgan");



//MIDDILWARES

const app = express();
let server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());




//Passport Middleware


//Passport Config.


app.use(morgan("dev"));

let _response = {};


const employeeRoutes = require("./routes/employeeRoutes");




// //ROUTES
app.use("/api/employee", employeeRoutes);

//Catching 404 Error
app.use((req, res, next) => {
  const error = new Error("INVALID ROUTE");
  error.status = 404;
  next(error);
});

//Error handler function
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 5000;



mongoose.connect("mongodb://localhost/intern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error in connecting to the database")
);

db.once("open", function () {
  console.log("Connected to the database!");
});

app.use("/", (req, res) => {
  res.status(200).json(_response);
});

server.listen(PORT, () => {
  _response.server = "Healthy";
});

