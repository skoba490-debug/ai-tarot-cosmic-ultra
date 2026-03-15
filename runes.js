const runes=[
"Феху",
"Уруз",
"Турисаз",
"Ансуз",
"Райдо",
"Кеназ",
"Гебо",
"Вуньо",
"Хагалаз",
"Наутиз",
"Иса",
"Йера"
]

exports.draw=()=>{

return{
rune:runes[Math.floor(Math.random()*runes.length)]
}

}
