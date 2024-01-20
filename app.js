let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexotNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate :1.2});
}

function exibirMensagemInicial(){
    exibirTexotNaTela('h1','Jogo do número secreto');
    exibirTexotNaTela('p','Escolha um número entre 1 e 10');  
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTexotNaTela('h1','Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${palavraTentativas} ${tentativas}!`;
        exibirTexotNaTela('p',mensagemTentativas);
        //ativar botão novo
        document.getElementById('reiniciar').removeAttribute('disabled');
        

    } else {
        if(chute > numeroSecreto){
            exibirTexotNaTela('p','O número secreto é menor');
        } else {
            exibirTexotNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
    listaNumerosSorteados=[];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}   

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    limparCampo = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}