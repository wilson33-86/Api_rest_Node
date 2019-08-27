const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
res.json({"nombre":"Hola Mundo Node.js"});
});


router.get('/datos/:name', (req, res) => {

	const name = req.params.name;
	//res.json(name);
	 const datos = [];
     switch(name){
      case 'yurani':
      datos.push({"nombre":"Leslie Yurani suares",
                    "nickname":"Verdura",
                    "Profesion":"Mercadeo"   });
         
      res.json(datos);
      break;

       case 'lucero':
       datos.push({"nombre":"Maria Lucero Ibarra",
                    "nickname":"Nena",
                    "Profesion":"Operaria produccion" });
         
      res.json(datos);
      break;

        case 'valeria':
       datos.push({"nombre":"Valeria suarez",
                    "nickname":"Ternurita",
                    "Profesion":"Estudiante" });
         
      res.json(datos);
      break;

      default:
           datos.push({"Error":" No existe el Usuario en la Bd"});
         res.json(datos);
      break;
     }
	/* if (name == 'yurani') {
	const datos = {"nombre":"Leslie suares",
                    "nickname":"verdura",
                    "Profesion":"mercadeo"   };
         
res.json(datos);
}*/

});

module.exports = router;