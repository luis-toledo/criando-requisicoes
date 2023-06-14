import { conectaAPI } from "./conectaAPI.js";

const btnFormulario = document.getElementById('criaVideo');

btnFormulario.addEventListener('click', async e => {
    e.preventDefault();
    const titulo = document.getElementById('titulo');
    const descricao = Math.floor(Math.random() * 10).toString();
    const url = document.getElementById('url');
    const imagem = document.getElementById('imagem');

    try{
        await conectaAPI.criaVideo(titulo.value, descricao, url.value, imagem.value);
        window.location.href = "http://192.168.100.5:5500/pages/envio-concluido.html";
    } catch(e){
        alert(e);
        window.location.reload();
    }

})

