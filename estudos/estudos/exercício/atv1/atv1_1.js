const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const promocao = (preco * 2) - 0.5
    
    resp.innerText = `Promoção de ${medicamento}\n Leve 2  por apenas R$: ${promocao}`

    e.preventDefault()
})