const express= require('express')
const app=express()
app.use(express.json())
const port=3001

app.get('/v1/explores',(req,res)=>{
    console.log(`Get explorer V1 api ${ new Date()}`)
    const explorer1={id:1, name :"explorer"}
    const explorer2={id:2, name :"explorer2"}
    const explorers={explorer1,explorer2}
    //HTPP CODE >Status :200
    res.status(200).json(explorers)

})

app.get('/v1/explores:id',(req,res)=>{
    console.log(`Get explorer by id V1 api ${ new Date()}`)
    const explorer1={id:1, name :"explorer"}
    //HTPP CODE >Status :200
    res.status(200).json(explorer1)

})

app.post('/v1/explores',(req,res)=>{
    console.log(`post explorers v1 api ${new Date()}`)
    console.log(req.body)
    res.status(201).json({message:"creado exitosamente"})//se creo una entidad 
})

app.put('/v1/explores:',(req,res)=>{
    console.log(`put explorers v1 api ${new Date()}`)
    //agregando logica para actualizar
    res.status(200).json({message:"actualizado correctamente"})//se creo una entidad 
})



app.listen(port,()=>{
    console.log("Server listo!!")
})