import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");
const btnPesquisa = document.getElementById('pesquisa');
const filtroDePesquisa = document.getElementById('pesquisar');

function constroiCards(listaDeVideo) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `
        <iframe width="100%" height="72%" src=${listaDeVideo.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${listaDeVideo.imagem}" alt="logo canal alura">
            <h3> ${listaDeVideo.titulo} </h3>
            <p>${listaDeVideo.descricao}</p>
        </div>`;

  return video;
}

listaVideo();

async function listaVideo(){
    try{
      const listaComOsVideos = await conectaAPI.listaVideos();
      lista.innerHTML = ``;
      listaComOsVideos.forEach( video => lista.appendChild(constroiCards(video)));
      btnPesquisa.addEventListener('click', () => filtraPesquisa(listaComOsVideos));
    } catch {
      lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar a lista de vídeos<h2`
    }
 
}


function filtraPesquisa(vidosAFiltrar){
    const videosFiltrados = vidosAFiltrar.filter(video => video.titulo.toLowerCase().includes(filtroDePesquisa.value.toLowerCase()));
    lista.innerHTML = ``;
    videosFiltrados.forEach( video => lista.appendChild(constroiCards(video)));
}
