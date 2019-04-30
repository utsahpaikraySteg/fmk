const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const app = express();
const router = express.Router();
const cors = require('cors');
const ABSPATH = path.dirname(process.mainModule.filename);
app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const DIR = './uploads';
const posts= require('./server/routes/posts');
 app.use(express.static(path.join(__dirname,'dist/my-dream-app2')));
 app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, 'dist/my-dream-app2/index.html'));
 });
 app.use('/posts',posts);
console.log(ABSPATH);
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
      return res.status(200).json({});
  };
  next();
});
app.post('/sendmail', (req,res)=>{
  console.log(req);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'utsahpaikray@gmail.com',
           pass: 'utsahpaikray@123'
       }
   });
   const mailOptions = {
    from: req.email, // sender address
    to: 'utsahpaikray@gmail.com', // list of receivers
    subject: 'Subject of your email ', // Subject line
    attachments: [
      {
       path: ABSPATH + '/package.json'
      }
   ],
    html: '<div style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f3f2f0;"><b>Hello, <p>I am happy to apply</p><strong>{{req.name}}</strong>\n<b>In</b></p></div>'// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      res.send('Hello World!');
  });
  
});
app.post('/uploadFile', (req, res)=>{
res.send('Hello World!');

});
const PORT = process.env.PORT || 3000;
 
app.listen(PORT, function () {
  console.log(`Node.js server is running on port ${PORT}`);
});