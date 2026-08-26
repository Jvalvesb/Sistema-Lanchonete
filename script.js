const botoesAdicionar = document.querySelectorAll(".adicionar");
const itensPedido = document.querySelector("#itens-pedido");
const totalElemento = document.querySelector("#total");
const botaoLimpar = document.querySelector("#limpar-pedido");

let valorTotal = 0;

botoesAdicionar.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const produto =  botao.closest(".produto");
        const nomeProduto = produto.querySelector("h3").textContent;
        const precoProduto = Number(produto.dataset.preco);
        if (itensPedido.querySelector(".mensagem-vazia")) {
            itensPedido.innerHTML= "";
        }
        const item =document.createElement("p");
        item.textContent = nomeProduto;
        itensPedido.appendChild(item);

        valorTotal = valorTotal + precoProduto;
        totalElemento.textContent = `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;

        botaoLimpar.addEventListener("click", function() {
        itensPedido.innerHTML = '<p class="mensagem-vazia">Nenhum item adicionado ainda.</p>';
        valorTotal = 0;
        totalElemento.textContent = "R$ 0,00";
});
    });
});