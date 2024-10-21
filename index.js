const express= require('express'); //Importar la librería para crear un servidor web

// instanciar nuestra aplicacion web
const app=express();

//configuramos nuestro servidor web
const port=3000;
app.listen(port, ()=>{
    console.log(`La aplicacion ha iniciado en el puerto ${port} `);
})

app.get('/',function(req,res){
    res.send("Hola Mundo desde Node, a través del Navegador")
})

app.get('/QuienSoy',function(req,res){
    res.json({"estudiante":"Angel de Jesus Rufino Mendoza",
        "carrera":"TI DSM",
        "grado":"4°",
        "grupo":"B",
        "asignatura":"Aplicaciones Web Orientada a Servicios (AWOS)"
    })
})