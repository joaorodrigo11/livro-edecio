//cria referencia ao form e elementos de resposta do programa
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//adicionando um ouvinte ao evento submit
frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2

    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    //cria as condições
    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}!! Você foi aprovado`
        resp2.style.color = "green"
    } else if(media >=4 ) {
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = "yellow"
    }  else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`
        resp2.style.color = "red"
    }
})