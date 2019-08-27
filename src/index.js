const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes

app.use(require('./routes/index'));
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/users',require('./routes/users'));
//inicializando servidor
app.listen(app.get('port'), ()=>{

console.log(`server on port ${app.get('port')}`);
});