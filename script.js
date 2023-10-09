const largura = window.innerWidth;

const topicos = document.querySelectorAll(".atendimento-topico");

const imagemTopico = document.querySelectorAll(".atendimento-topico img");

if (largura>=601 && largura<=767){

    topicos.forEach((item)=>{
        item.setAttribute("class", "topico-menor");
    })

    imagemTopico.forEach((imagem)=>{
        imagem.style.width = "30%";
    })
    
}