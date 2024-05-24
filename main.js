// Função para adicionar um novo contato
function adicionarContato() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        const tabela = document.getElementById('contatos').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();
        const colunaNome = novaLinha.insertCell(0);
        const colunaTelefone = novaLinha.insertCell(1);

        colunaNome.innerHTML = nome;
        colunaTelefone.innerHTML = telefone;

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        alert('Preencha todos os campos!');
    }
}
