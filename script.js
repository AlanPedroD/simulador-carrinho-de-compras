let quantidadeProduto = document.getElementById("quantidade-produto-01");
console.log(quantidadeProduto)

let btnAdicinar = document.getElementById("btn-adicionar-produto-01");
console.log(btnAdicinar)

let btnSubtrair = document.getElementById("btn-subtrair-produto-01");

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");

let valorSubtotal = document.getElementById("valor-subtotal");

let subtotal = document.getElementById("subtotal-valor")
console.log(subtotal)


function adicionar(){
  quantidadeProduto.value = Number (quantidadeProduto.value) + 1;
  quantidadeSubtotal.innerText = quantidadeProduto.value + " itens";
  let valor = 11.66;
  valorSubtotal.innerText = (quantidadeProduto.value * valor).toFixed(2);
}

function subtrair(){
  quantidadeProduto.value = Number (quantidadeProduto.value) - 1 ;
  quantidadeSubtotal.innerText = quantidadeProduto.value + " itens";
  let valor = 11.66;
  valorSubtotal.innerText = (quantidadeProduto.value * valor).toFixed(2);
}

btnAdicinar.addEventListener("click", adicionar);
btnSubtrair.addEventListener("click", subtrair);




