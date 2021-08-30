var cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
  atributos: {
      ataque: 80,
      defesa: 60,
      magia: 90
  }
}

var cartaRafa = {
  imagem:'https://i.pinimg.com/originals/c5/52/cd/c552cd167804db7bbfc8fd455cbf99aa.jpg', 
  nome:"Bullbasauro",
  atributos:  {
    ataque:70,
    defesa:80,
    magia:60,
  }
 }

var cartaGui2 = {
imagem:"https://images.madeiramadeira.com.br/product/images/86220858-quadro-decorativo-darth-vader-star-wars-nerd-geek-decoracoes-com-moldura-g01728219-4535-1_zoom-1007x1385.jpg?width=900",
  nome:"Lord Darth Vader",
  atributos: {
    ataque:100,
    defesa:90,
    magia:90,    
  }
 }

var cartaGui = {
  imagem:"https://static.wikia.nocookie.net/xmen-comics/images/5/58/Giant-Size_X-Men_Storm_Vol_1_1_Textless.jpg/revision/latest?cb=20200530221431&path-prefix=pt-br",
  nome:"Tempestade",
  atributos: {
    ataque:85,
    defesa:70,
    magia:100,
  }
}

  var cartaRuth = {
  imagem:"https://conteudo.imguol.com.br/c/entretenimento/58/2017/05/30/pikachu-nervoso-1496159464346_v2_450x450.png",
  nome:"Pikachu",
  atributos: {
    ataque:86,
    defesa:55,
    magia:66,
    }
  }

var cartaEdu = {
  imagem:"https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg",
  nome:"Baby Yoda",
  atributos:  {
    ataque:76,
    defesa:56,
    magia:63,    
  }
 }

var cartaGui4 = {
   imagem:"https://static.wikia.nocookie.net/xmen-comics/images/b/bd/X-Men_Vol_5_1_Artgerm_Virgin_Variant.jpg/revision/latest?cb=20191110000838&path-prefix=pt-br",
  nome:"Jean Grey",
  atributos: {
    ataque:54,
    defesa:44,
    magia:100,
  }
}

var cartaLol = {
  nome: "Caitlyn",
  imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
  atributos: {
      ataque: 95,
      defesa: 40,
      magia: 10,
  }
}

var cartaNaruto = {
  nome: "Naruto",
  imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
  atributos: {
      ataque: 80,
      defesa: 60,
      magia: 100,
  }
}

var cartaHarry = {
  nome: "Harry Potter",
  imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
  atributos: {
      ataque: 70,
      defesa: 50,
      magia: 95,
  }
}

var cartaBatman = {
  nome: "Batman",
  imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
  atributos: {
      ataque: 95,
      defesa: 70,
      magia: 0,
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaGui, cartaGui2, cartaRafa, cartaEdu, cartaRuth, cartaGui4, cartaHarry, cartaBatman, cartaNaruto, cartaLol]

var pontosJogador = 0
var pontosMaquina = 0 

atualizaPlacar()
atualizaQuantidadeDeCartas()


function atualizaQuantidadeDeCartas() { 
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidade de Cartas no Jogo: " + cartas.length

  divQuantidadeCartas.innerHTML = html

}

  function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + " vs " + pontosMaquina + " Máquina" 

    divPlacar.innerHTML = html
}
 
function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
 
  
 var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false 
  
  exibeCartaJogador ()
}

function exibeCartaJogador () {
  var divCartaJogador =  document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"           style=" width: inherit; height: inherit; position: absolute;">'
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
    console.log(atributo)  
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
}
  var html = "<div id='opcoes' class='carta-status'>"
   
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'

 }

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    
    if(cartas.length == 0) {
        alert("Fim de Jogo")
        if (pontosJogador > pontosMaquina){
          htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (pontosMaquina > pontosJogador){
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      } else {
          htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
    }


    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled =  false
   

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaMaquina.atributos) {
      console.log(atributo)
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }

  var html = "<div id='opcoes' class='carta-status --spacing'>"

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('Resultado')
    divResultado.innerHTML = ""
}