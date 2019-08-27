const users = require('../usuarios.json');
const _ = require('underscore');
module.exports={

	getUser:(req, res)=>{
 
 res.json(users);
},

   postUser:(req, res)=>{
  //console.log(req.body);
 const{nombre, apellido} = req.body;
 if (nombre && apellido) {
   //const id =users.length + 1;
  // const newUser = {id,...req.body};
     users.push({id:users.length +1,
    	nombre, apellido});
    
    //users.push(newUser);
 	res.json(users);
 }else{
 	res.status(500).json({"Error 500":"Solicitud Erronea"});

 }
 
  //res.send('recibido');

},

putUser:(req,res)=>{
  const { id } =req.params;
  const{nombre, apellido} = req.body;
 if (nombre && apellido) {
 	 _.each(users,(user, i)=>{

       if (user.id == id) {
        user.nombre=nombre;
        user.apellido=apellido;
    }
});
res.json(users);
 }else{
 	res.status(500).json({"Error":"Ha habido un error"});
 }

},

deleteUser:(req, res)=>{
 
 const { id } =req.params;
/*
for (var i = 0; i < users.length; i++) {
	if(users[i].id == id){
       users.splice(i,1);
	}
}
*/

users.forEach((user,i)=>{
if(user.id == Number(id)){
       users.splice(i,1);
  }
});

 res.json(users);


}


}