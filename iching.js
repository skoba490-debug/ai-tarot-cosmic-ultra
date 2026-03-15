const hexagrams=[
"䷀",
"䷁",
"䷂",
"䷃",
"䷄",
"䷅",
"䷆",
"䷇",
"䷈",
"䷉"
]

exports.draw=()=>{

return{
hexagram:hexagrams[Math.floor(Math.random()*hexagrams.length)]
}

}
