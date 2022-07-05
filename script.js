document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

document.querySelector("#qtde").addEventListener("change", atualizarPreco);

function atualizarPreco() {
  const qtde = document.querySelector("#qtde").Value;
  let preco = qtde * 100;
  document.querySelector("#preco").innerHTML = `R$ ${preco}`;
}
