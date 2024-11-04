let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let inputQuantidadeProduto = document.getElementById('quantidade-produto-01');

let botaoSubtrair = document.getElementById('btn-subtrair-produto-01');

let botaoAdicionar = document.getElementById('btn-adicionar-produto-01');

let valorProduto = 11.66;

let subtotalInfo = {
  quantidade: 1,
  valor: valorProduto,
};

function atualizarCarrinho(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  inputQuantidadeProduto.value = subtotalInfo.quantidade
}

// atualizarCarrinho();

function adicionarProduto(){
  subtotalInfo.quantidade++;
  subtotalInfo.valor+= valorProduto;
  atualizarCarrinho();
}

function subtrairProduto(){
  if(subtotalInfo.quantidade > 0){
    subtotalInfo.quantidade--;
    subtotalInfo.valor-= 11.66;
    atualizarCarrinho();
  }
}

atualizarCarrinho();

botaoAdicionar.addEventListener("click", adicionarProduto);
botaoSubtrair.addEventListener("click", subtrairProduto);