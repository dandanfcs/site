let cont = 0;

function Next() {
    cont++;
    if (cont == 1) {
        cromo();
    }
    if (cont == 2) {
        massagem();
    }
    if (cont == 3) {
        cont = 0;
        reiki();
    }

}



function Prev() {

    if (cont == 1) {
        cont--;
        reiki();
    }


    if (cont == 2) {
        cont--;
        cromo();
    }



}




function reiki() {
    document.getElementById('img').src = './flor.png';


    let text = document.getElementById('l2');

    text.innerHTML = `<h2>Reiki</h2><br>
    <p> O método Reiki é um sistema natural de harmonização e reposição energética que mantém ou recupera a saúde,atuando nas desordens física e mental. Esse método foi desenvolvido no Japão pelo Mestre Mikao Usui. Com ele você pode se proteger energeticamente, aplicar a energia em plantas, em si mesmo, outras pessoas, animais, alimentos, objetos, proteger qualquer ambiente, contribui com o processo de autoconhecimento.
   </p> `;


}

function cromo() {
    document.getElementById('img').src = './flor.png';

    let text = document.getElementById('l2');

    text.innerHTML = `<h2>Cromoterapia</h2><br> 
    <p>A cromoterapia, por intermédio das cores, procura estabelecer e restaurar o equilíbrio físico e energético, promovendo a harmonia entre corpo, mente e emoções, pois o desvio da energia vibratória do corpo é responsável por desencadear patologias. Pode ser trabalhada de diferentes formas: por contato, por visualização, com auxílio de instrumentos, com cabines de luz, com luz polarizada, por meditação.

    <br>Reconhecida pela OMS (Organização Mundial de Saúde), uma terapia que pode ser aplicada junto com o Reiki.<br>

    A sessão tem duração de 60 minutos, desde a anamnese até a aplicação das cores.</p>`;


}

function massagem() {
    document.getElementById('img').src = './flor.png';


    let text = document.getElementById('l2');

    text.innerHTML = `<h2>Massagem Relaxante</h2><br>
    <p> Usando-se de movimentos firmes e  leves, a massagem relaxante é uma excelente alternativa para o tratamento de dores musculares, auxilia na circulação energética e sanguínea. Geralmente causadas por estresse, problemas de postura ou movimentos repetitivos, esses hábitos são prejudiciais, resultando em diferentes doenças. Dessa maneira, ela é uma ferramenta que promove o bem-estar, aliviando o desconforto das regiões mais afetadas. <br>

    Tem duração de 50 minutos, podendo ser feito semanalmente, quinzenalmente ou mensalmente. Somente para mulheres.
    </p> `;


}