function fonte(e) {
    var elemento = document.getElementById("conteudo");
    var atual = elemento.estilo.fontSize;
    document.getElementById("backup").value = back;
    back = parseInt(atual);

    if (e === 'a') {
        atual = parseInt(atual) + 2 + 'px';
    } else if (e === 'b') {
        atual = parseInt(atual) - 2 + 'px';
    } else if (e === 'c') {
        atual = 19 + 'px';
    }
    elemento.estilo.fontSize = atual;
}