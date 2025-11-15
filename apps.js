const express = require('express')
const port = 8000

const app = express()
app.use(express.json()) //middleware

const tasks = [
    {
        "id" : 1,
        "Kegiatan" : "Futsal",
       "Waktu" : "Malam",  
    },
    {
        "id" : 2,
        "Kegitan" : "Karate",
        "Waktu" : "Siang",  
    },
    {
        "id" : 3,
        "Kegiatan" : "Mancing",
        "Waktu" : "Pagi",
    }
]

// HTTP Verb Get
app.get('/tasks', (req, res)=>{
    res.status(200).json({
        "total" : tasks.length,
        "data" : tasks,
        "note" : "All tasks list"
    })

})

app.get('/tasks/:id', (req, res)=>{
    let id_tasks = parseInt(req.params.id)
    let result = tasks.filter(s => s.id === id_tasks)

    if (result == 0){
        return res.status(400).json({
            status : "Data not found"
        })
    }

    res.status(200).json({
        message : "tasks Found",
        data : result
    })
})

app.post('/tasks', (req, res)=>{
    const{Kegiatan, Waktu} = req.body
    if (!Kegiatan || !Waktu){
        return res.status(400).json({
            message : "id & Kegiatan Required"
        })
    }

     const newID = {
        "id" : tasks.length + 1,
        "Kegiatan" : Kegiatan,
        "Waktu" : Waktu
    }

    tasks.push(newID)
    res.status(200).json({
        message : "Succesfull adding data"
    })
})

app.delete('/tasks/:id', (req, res)=>{
    let idtasks = parseInt(req.params.id)
    let findID = tasks.findIndex(s=> s.id===idtasks)
   
    if(findID == -1){
        return res.status(400).json({
            message : "Not Found"
        })
    }

    tasks.splice(findID,1)
    res.status(200).json({
        message : "delete is successfull",
        data : tasks
    })
})

app.put('/tasks/:id', (req, res)=>{
    const idtasks = parseInt(req.params.id)
    const{Kegiatan, Waktu} = req.body
    let findID = tasks.find(s => s.id===idtasks)
    if(!findID){
        return res.status(400).json({
            message : "Not Found"
        })
    }

    if (Kegiatan) findID.Kegiatan = Kegiatan
    if (Waktu) findID.Waktu = Waktu
    res.status(200).json({
        message : "Success",
        data : findID
    })
})

app.listen(port,()=>{
    console.log(`Server Run at http://localhost:${port}`);
})