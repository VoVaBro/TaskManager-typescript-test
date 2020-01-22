const express = require('express');
const app = express();
const http = require('http')
const upload = require('express-fileupload')
const mongoose = require ('mongoose');
const cookieParser = require ('cookie-parser')
const session = require ('express-session')
const mongoSessionStore = require ('connect-mongo')(session)



mongoose.connect('mongodb://localhost:27017/tasks', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    http.Server(app).listen(5000, console.log('server start on port 5000'));
    console.log('Mongo connected!')
}) 
.catch(e => console.log('MONGO ERRO: ', e));



const sess = {
    secret: 'taskmanagersecret',
    resave: false,
    saveUninitialized: false,
    store: new mongoSessionStore ({ mongooseConnection: mongoose.connection }),
    cookie: {
        secret: true,
        maxAge:  180 * 60 * 1000
    }
};


app.use(express.json({extended: true}))
app.use(upload());
app.use(cookieParser())
app.use(session(sess))



const taskRoute = require('./routes/taskRotes')
const userRoute = require ('./routes/userRoutes')


app.use('/tasks', taskRoute)
app.use('/users', userRoute)



 



