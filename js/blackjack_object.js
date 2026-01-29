//constante com o número máximo de pontos para blackJack
const MAX_POINTS = 21;


// Classe BlackJack - construtor
class BlackJack {
    constructor() {

        // array com as cartas do dealer
        this.dealer_cards = [];
        // array com as cartas do player
        this.player_cards = [];
        // variável booleana que indica a vez do dealer jogar até ao fim
        this.dealerTurn = false;

        // objeto na forma literal com o estado do jogo
        this.state = {
            'gameEnded': false,
            'dealerWon': false,
            'playerBusted': false
        };

        //métodos utilizados no construtor (DEVEM SER IMPLEMENTADOS PELOS ALUNOS)
        this.new_deck = function () {
            const SUITS = 4;
            const CARDS_PER_SUIT = 13;

            let deck = [];
            for (let i = 0; i < SUITS * CARDS_PER_SUIT; i++) {
                deck[i] = ([[(i % CARDS_PER_SUIT) + 1], [(i % SUITS) + 1]]);
            }

            return deck;
        };

        this.shuffle = function (deck) {
            let indexes = [];
            let shuffled = [];
            let index = null;

            //criar array de indices

            for (let n = 0; n < deck.length; n++) {
                indexes.push(n);
            }

            //sortear o indice aleatoriamente para colocar a carta 
            //com esse indice
            for (let n = 0; n < deck.length; n++) {
                index = Math.floor(Math.random() * indexes.length);
                shuffled.push(deck[indexes[index]]);
                indexes.splice(index, 1);  //retirar do array de
                //indices o indice sorteado, assim não se corre o 
                //risco de repetir indices
            }

            return shuffled;

        };

        // baralho de cartas baralhado
        this.deck = this.shuffle(this.new_deck());
        //this.deck = this.new_deck();
    }

    // métodos
    // devolve as cartas do dealer num novo array (splice)
    get_dealer_cards() {
        return this.dealer_cards.slice();
    }

    // devolve as cartas do player num novo array (splice)
    get_player_cards() {
        return this.player_cards.slice();
    }

    // Ativa a variável booleana "dealerTurn"
    setDealerTurn(val) {
        this.dealerTurn = val;
    }

    //MÉTODOS QUE DEVEM SER IMPLEMENTADOS PELOS ALUNOS
    get_cards_value(cards) {
        let nAces = 0;
        let value = 0;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i][0] == 1) {
                nAces++;
            } else if (cards[i][0] < 10) {
                value += parseInt(cards[i][0]);
            } else {
                value += 10;
            }
        }

        while (nAces > 0) {
            let acesvalue = 0;
            if (value + 11 > MAX_POINTS) {
                acesvalue = 1;
            } else acesvalue = 11;

            value += acesvalue;
            nAces--;
        }

        return value
    }

    dealer_move() {
        let card = this.deck[0];
        this.deck.splice(0, 1);      //retirar a carta da primeira posicao para dar ao dealer
        this.dealer_cards.push(card);

        return this.get_game_state();
    }

    player_move() {
        let card = this.deck[0];

        this.deck.splice(0, 1); //tira 1 carta desde a posição 0
        this.player_cards.push(card);//empurra a carta para o baralho

        return this.get_game_state();

    }


    get_game_state() {
        let playerPoints = this.get_cards_value(this.player_cards);
        let dealerPoints = this.get_cards_value(this.dealer_cards);

        let playerBusted = playerPoints > MAX_POINTS;
        let playerWon = playerPoints === MAX_POINTS;

        let dealerBusted = this.dealerTurn && (dealerPoints > MAX_POINTS);
        let dealerWon = this.dealerTurn && (dealerPoints > playerPoints)
            && (dealerPoints <= MAX_POINTS);

        this.state.gameEnded = playerBusted || playerWon || dealerBusted || dealerWon;

        this.state.dealerWon = dealerWon || playerBusted;

        this.state.playerBusted = playerBusted;

        return this.state;
    }
}

