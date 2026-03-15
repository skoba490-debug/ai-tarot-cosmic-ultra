const express = require("express")
const cors = require("cors")

const tarot = require("./divination/tarot")
const runes = require("./divination/runes")
const iching = require("./divination/iching")

const agents = require("./ai/agents")
const memory = require("./memory/memory")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.get("/api/tarot",(req,res)=>{
res.json(tarot.draw())
})

app.get("/api/rune",(req,res)=>{
res.json(runes.draw())
})

app.get("/api/iching",(req,res)=>{
res.json(iching.draw())
})

app.post("/api/ai",(req,res)=>{

const {message,agent,session} = req.body

memory.save(session,message)

const reply = agents.run(agent,message)

res.json({reply})

})

app.listen(3000,()=>{
console.log("AI TAROT COSMIC ULTRA MAX RUNNING")
})