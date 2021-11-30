// const express = require('express'); //express란 이름으로 객체를 불러와서 사용하겠다. express가 선언은 됐지만 해당 값이 읽히지는 않는다.
// const path = require('path');
// const cors=require('cors');
// const passport = require('passport');//const는 객체를 생성, 한번만 지정하니 다른데서덮어쓰려하면 에러남
// const mongoose = require('mongoose');
// const users = require("./routes/users");
// const config = require('./config/database');




// //Connect to Database 
// mongoose.connect(config.database);
// //on Connection
// mongoose.connection.on('connected',() => {
//      console.log('Connected to Database'+config.database);
// }); 
// //on Error 
// mongoose.connection.on('error',(err) => {
//      console.log('Database error:'+err);
//  });

// const app = express();

// //port number
// const port = 3000;

// //콘솔에시간표시하는미들웨어
// app.use(function(req,res,next) {
//      console.log('Time:',Date.now())
//      next()
//  });

// app.use(cors());

//  //라우팅 설정
// app.use('/users',users);

// // Static Folder 기능을 제공하는 미들웨어
// app.use(express.static(path.join(__dirname, "public")));


 
// // app.get('/', (req,res) => {
// //      res.send('<h1>서비스 준비중입니다.......</h1>');
// // });
// // app.get('/eng',(req,res) => {
// //     res.send('<h1>Service under construction..</h1>')
// // })


// //start server
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });







// // //Set Static Folder
// // app.use(express.static(path.join(__dirname,'public')));



// // //CORS미들웨어
// app.use(cors());
// // //JSON활용을위한미들웨어
// app.use(express.json());
// // //URL인코딩된데이터의활용을위한미들웨어
// app.use(express.urlencoded({extended:true}));
// // //StaticFolder기능을제공하는미들웨어
// app.use(express.static(path.join(__dirname,'public')));
// // //Passport미들웨어
// app.use(passport.initialize());
// app.use(passport.session());
// require('./config/passport')(passport);

// // //라우팅설정을위한미들웨어(마지막에넣음)
// app.use('/users',users)
// // //start server
// // app.listen(port,() => {
// //     console.log(`Server started on port ${port}`);
// // });


const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const users = require("./routes/users");
const config = require("./config/database");

// Connect to Database
mongoose.connect(config.database);
// on Connection
mongoose.connection.on("connected", () => {
  console.log("Connected to Database " + config.database);
});
// on Error
mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

const app = express();

// port number

const port = process.env.PORT || 3000;


//미들웨어
// 클라이언트의 요청시간을 콘솔에 표시하도록 하는 미들웨어
// app.use(function (req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });
// CORS 미들웨어
app.use(cors());
// JSON 활용을 위한 미들웨어
app.use(express.json());
// URL 인코딩된 데이터의 활용을 위한 미들웨어
app.use(express.urlencoded({ extended: true }));
// Set Static Folder 기능을 제공하는 미들웨어/를 사용하도록 설정하는 미들웨어
app.use(express.static(path.join(__dirname, "public")));


//Passport 미들웨어
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// 라우팅 설정을 위한 미들웨어 (맨뒤에 넣음)
app.use("/users", users);

// start server
app.listen(port, function () {
  console.log(`Server started on http://localhost:${port}/`);
});