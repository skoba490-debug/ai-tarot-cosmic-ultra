let memory = {}

exports.save = (session,msg)=>{

if(!memory[session]){
memory[session] = []
}

memory[session].push({
msg:msg,
time:Date.now()
})

}

setInterval(()=>{

const now = Date.now()

for(let s in memory){

memory[s] = memory[s].filter(
m => now - m.time < 7*24*60*60*1000
)

}

},60000)
6. divination/tarot.js
JavaScript
Копировать код
const cards=[
"Шут",
"Маг",
"Жрица",
"Императрица",
"Император",
"Иерофант",
"Влюбленные",
"Колесница",
"Сила",
"Отшельник",
"Колесо Фортуны",
"Башня",
"Звезда",
"Луна",
"Солнце",
"Мир"
]

exports.draw=()=>{

return{
card:cards[Math.floor(Math.random()*cards.length)]
}

}
