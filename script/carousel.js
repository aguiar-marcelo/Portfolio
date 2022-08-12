let Projetos = [
  {
    previa: "./img/itachi.gif",
    imagem: "./img/itachi.jpg",
    link: "https://naruto.fandom.com/pt-br/wiki/Itachi_Uchiha",
    titulo: "Caixa Eletronico",
    texto: "Aplicaçao Desktop que simula um caixa eletrônico, Verifique qual seu saldo em conta e realize saques fictício, tambem permite optar por notas de valor baixo ou alto.",
    tec: ["./img/tec/csharp.png"]
  },

  {
    previa: "./img/naruto.gif",
    imagem: "./img/naruto.jpg",
    link: "https://github.com/aguiar-marcelo/Gerenciador_de_projetos",
    titulo: "Gerenciador de Projetos",
    texto: "Aplicação web que gerencia projetos e seus custos, adicionando seus projetos, permite alterá-los e excluí-los ou adicionar diferentes tipos de serviços para cada projeto. <br> Sistema controla e indica quando o orçamento do projeto é extrapolado pelos custos dos serviços.",
    tec: ["./img/tec/react.png", "./img/tec/html.png", "./img/tec/css.png"]

  },
  {
    previa: "./img/kakashi.gif",
    imagem: "./img/kakashi.jpg",
    link: "https://github.com/aguiar-marcelo/CRUD-conteiners",
    titulo: "Containers",
    texto: "Sistema Crud (Create, Read, Update e Delete) de containers, realiza as quatro principais operações utilizadas em bases de dados. <br> Permite adicionar, alterar ou deletar um container e visualizar em tempo real os containers existentes e suas características.<br> sistema Dividido em:<br><br><b>Servidor:</b> que roda uma Api conectada ao Banco de Dados.<br><b>Cliente:</b> Aplicação web que realiza requisições ao servidor por meio da Api.",
    tec: ["./img/tec/react.png","./img/tec/node.png","./img/tec/mysql.png", "./img/tec/html.png", "./img/tec/css.png"]
  },
  {
    previa: "./img/lee.gif",
    imagem: "./img/lee.png",
    link: "https://github.com/aguiar-marcelo/Gerador_de_Etiquetas",
    titulo: "Gerador de Etiquetas",
    texto: "Mensalmente a empresa ao qual faço estágio fornece cestas básicas aos seus colaboradores, cada cesta é etiquetada com informações do respectivo colaborador, percebi que o RH criava o arquivo de impressão manualmente pelo Microsoft Word, então automatizei o processo criando esta aplicação web que gera automaticamente as etiquetas no formato exato, conectado ao banco de dados da empresa mantendo as etiquetas sempre atualizadas mesmo que tenha saído ou entrado funcionários durante o mês. <br><b>Formato:</b> Ink-Jet/laser Carta 25,4x101,6 6181 Pimaco.",
    tec: ["./img/tec/oracle.png","./img/tec/node.png","./img/tec/js.png", "./img/tec/html.png", "./img/tec/css.png"]

  },
  {
    previa: "./img/parimpar.gif",
    imagem: "./img/parimpar.jpg",
    link: "https://github.com/aguiar-marcelo/par_ou_impar",
    titulo: "Par ou Ímpar",
    texto: "Recebe um valor e responde se é Ímpar ou Par, mas antes valida se realmente é um numero, caso não, exibe mensagem de erro.",
    tec: ["./img/tec/js.png", "./img/tec/html.png", "./img/tec/css.png"]
  }
];

let posi0 = 0;
let posi1 = 1;
let posi2 = 2;
let posi3 = 3;
let posi4 = 4;

var mainView = document.getElementById("principal");
function loadCarousel() {

  let leftItem = document.getElementById("leftItem");
  leftItem.style.backgroundImage = "url(" + Projetos[posi0].imagem + ")";

  let leftPrev = document.getElementById("leftPrev");
  leftPrev.style.backgroundImage = "url(" + Projetos[posi1].imagem + ")";

  
  mainView.style.backgroundImage = "url(" + Projetos[posi2].previa + ")";

  let rightPrev = document.getElementById("rightPrev");
  rightPrev.style.backgroundImage = "url(" + Projetos[posi3].imagem + ")";

  let rightItem = document.getElementById("rightItem");
  rightItem.style.backgroundImage = "url(" + Projetos[posi4].imagem + ")";


  let linkTag = document.getElementById("link-repositorio")
  linkTag.href = Projetos[posi2].link;

  let PrincipalTitulo = document.getElementById("titulo")
  PrincipalTitulo.innerHTML = Projetos[posi2].titulo;

  let PrincipalTexto = document.getElementById("texto")
  PrincipalTexto.innerHTML = Projetos[posi2].texto;

  
  tecVetor = Projetos[posi2].tec;
  let tecBox = document.getElementById("tecnologias")
  while (tecBox.hasChildNodes()) {
    tecBox.removeChild(tecBox.firstChild);
  }

  for (let i = 0; i < Projetos[posi2].tec.length; i++) {
    var item = document.createElement("img");
    item.src = tecVetor[i];
    tecBox.appendChild(item);
  }
};

function scrollRight() {
  posi0 = posi1;
  posi1 = posi2;
  posi2 = posi3;
  posi3 = posi4;
  if (posi4 >= (Projetos.length - 1)) {
    posi4 = 0;
  } else {
    posi4++;
  };
  loadCarousel();
};

function scrollLeft() {
  posi4 = posi3;
  posi3 = posi2;
  posi2 = posi1;
  posi1 = posi0;

  if (posi0 === 0) {
    posi0 = Projetos.length - 1;
  } else {
    posi0--;
  };
  loadCarousel();
};

document.getElementById("rightItem").addEventListener("click", scrollRight);
document.getElementById("rightPrev").addEventListener("click", scrollRight);
document.getElementById("leftPrev").addEventListener("click", scrollLeft);
document.getElementById("leftItem").addEventListener("click", scrollLeft);

//teclas do teclado <- e -> para alterar o carrousel
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) {
    scrollLeft();
  } else if (e.keyCode === 39) {
    scrollRight();
  }
});

loadCarousel();
scrollLeft();
scrollLeft();
scrollLeft();
scrollLeft();
scrollLeft();

