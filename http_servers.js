const express = require('express')

const app = express();

app.get('/sum/:a/:b',function(req,res){
    const a  = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    res.json({
        ans:a+b
    })
})
app.get('/divide/:a/:b',function(req,res){
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    if(!b == 0){
    res.json({
        ans:a/b
    })
    }else{
        res.send("error")
    }
})

app.get('/multiply/:a/:b',function(req,res){
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    if(!a ==0 && !b ==0){
    res.json({
        ans:a * b
    })
    }else{
        res.send("error")
    }
})

app.get('/subtract/:a/:b',function(req,res){
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    res.json({
        ans:a-b
    })
})

app.listen(4000,()=>console.log("listen it on port 4000"))