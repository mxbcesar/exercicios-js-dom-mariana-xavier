function cadastrarUsuario() {

    const nome = document.getElementById("nome").value;
    const dataNasc = document.getElementById("dataNasc").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const origem = document.getElementById("origem").value;
    const estado = document.getElementById("uf").value;

    const frase = `${nome} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, é de origem ${origem} do estado ${estado}.`;

    const resultado = document.getElementById("resultado");
    resultado.innerText = frase;

    resultado.style.color = "green";
    resultado.style.fontSize = "24px";
}
