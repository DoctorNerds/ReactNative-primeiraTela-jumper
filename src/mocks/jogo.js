import jumper from '../../assets/jumper.png';

import trex from '../../assets/personagens/trex.png';
import cactos from '../../assets/personagens/cactos.png';
import pterossauro from '../../assets/personagens/pterossauro.png';

const cesta = {
    detalhes: {
      nome: "Conheça nossos jogos",
      logoJogo: jumper,
      nomeJogo: "Jumper",
      descricao: "Fizemos a nossa versão do famoso jogo da Google do T-Rex, já imaginou criar o seu também? Pule e sobreviva o quanto puder!.",
      botao: "JOGAR AGORA",
    },
    itens: {
      titulo: "Personagens do jogo",
      lista: [
        {
          nome: "T-Rex",
          imagem: trex,
          descricao: "O personagem mais famoso do mundo offline da Google está agora no MatrizKIDS. Ele sabe correr e pular, mas cuidado com os obstáculos no caminho."
        },
        {
          nome: "Cactos",
          imagem: cactos,
          descricao: "No planeta Jumper os cactos estão em toda parte. Se o T-Rex encostar nele, já era."
        },
        {
          nome: "Pterossauro",
          imagem: pterossauro,
          descricao: "O dinossauro mais perigoso dos céus do planeta Jumper, é melhor o T-Rex não ficar no seu caminho."
        }
      ]
    }
  }

export default cesta;