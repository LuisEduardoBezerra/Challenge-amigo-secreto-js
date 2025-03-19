//projeto
let listaAmigos = [];

// Adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome!");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = ""; // Limpa o campo de entrada
    input.focus(); // Mantém o cursor no campo de entrada
}

// Atualizar a lista exibida na página
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach((nome, index) => {
        ul.innerHTML += `<li>${nome} <button onclick="removerAmigo(${index})">X</button></li>`;
    });
}

// Remover amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

// Sortear um amigo secreto
function sortearAmigo() {
    // Validar que há amigos disponíveis antes de sortear
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    // Gerar um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    
    // Obter o nome sorteado
    const nomeSorteado = listaAmigos[indiceSorteado];

    // Mostrar o resultado na página
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto sorteado é: <strong>${nomeSorteado}</strong></li>`;
}