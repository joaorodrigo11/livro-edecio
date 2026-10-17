const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const nome = frm.inCandidato.value
    const numero = Number(frm.inNumero.value)

    resp.innerText = `Você votou no candidato ${nome} do número ${numero}, meus parabéns!!!!`

    e.preventDefault()
})