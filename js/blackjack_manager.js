let game = null;
let player_chips_start = 10000;
let player_chips_total = player_chips_start;
let bet = 0;
let lastBet = 0;
let sndWin = new Audio("music/win.wav");
let sndLose = new Audio("music/gameOver.wav");
let sndNewGame = new Audio("music/shuffle.wav");
let sndNewCard = new Audio("music/nextCard.wav");
let sndMoney = new Audio("music/theDropCoins.mp3");
let sndCheckBet = new Audio("music/checkbet.mp3");
let sndDrink = new Audio("music/drink.wav");

//let player_chips_total = 0;


function buttons_initialization() {
    document.getElementById("card").disabled = false;
    document.getElementById("stand").disabled = false;
    document.getElementById("checkBet").disabled = true;
    document.getElementById("new_game").disabled = false;//true
    document.getElementById("customRange3").disabled = true;
}

function finalize_buttons() {
    document.getElementById("card").disabled = true;
    document.getElementById("stand").disabled = true;
    document.getElementById("new_game").disabled = false;//false

}

function drink() {
    sndDrink.play();
}


//FUNÇÕES QUE DEVEM SER IMPLEMENTADOS PELOS ALUNOS
function new_game() {
    if (player_chips_total < 10) {
        player_chips_total = player_chips_start
    }

    sndNewGame.play();

    bet = 0;

    game = new BlackJack();


    document.getElementById("customRange3").min = 10;
    document.getElementById("customRange3").max = player_chips_total;
    document.getElementById("customRange3").step = 10;

    finalize_buttons();

    document.getElementById("checkBet").disabled = false;
    document.getElementById("customRange3").disabled = false;

    let s = 0;
    if (lastBet !== 0) {
        document.getElementById("bet").innerHTML = JSON.stringify("You have " + player_chips_total + " chips, your last bet was " +
            lastBet + " chips. What's your bet now? Press 'Check Bet' to continue");
    } else {
        document.getElementById("bet").innerHTML = JSON.stringify("You have " + player_chips_total + " chips. What's your bet? Press 'Check Bet' to continue")
    }

    document.getElementById("rangeval").innerHTML = JSON.stringify(s);


    document.getElementById("cardD1").src = "";

    document.getElementById("cardD3").src = "";
    document.getElementById("cardD4").src = "";
    document.getElementById("cardD5").src = "";
    document.getElementById("cardD6").src = "";
    document.getElementById("cardD7").src = "";
    document.getElementById("cardD8").src = "";

    document.getElementById("cardP1").src = "";
    document.getElementById("cardP2").src = "";
    document.getElementById("cardP3").src = "";
    document.getElementById("cardP4").src = "";
    document.getElementById("cardP5").src = "";
    document.getElementById("cardP6").src = "";
    document.getElementById("cardP7").src = "";
    document.getElementById("cardP8").src = "";
    let str = (".");
    document.getElementById("dealer").innerHTML = JSON.stringify(str);
    document.getElementById("player").innerHTML = JSON.stringify(str);

    //jogada Dealer


    dealer_new_card();
    dealer_new_card();
    document.getElementById("cardD2").src = "imgs/Card_Back.jpg";
    game.setDealerTurn(false);

    //jogada player

    player_new_card();
//    player_new_card();


}


function update_dealer(state) {

    let stringD = "Dealer";
    let stringP = "";
    let cardsD = game.get_dealer_cards();


    let baralho;
    let num = 1;
    for (let index = 0; index < cardsD.length; index++) {
        if (cardsD[index][1] == 1) {
            baralho = "espadas";
        }
        if (cardsD[index][1] == 2) {
            baralho = "copas";
        }
        if (cardsD[index][1] == 3) {
            baralho = "ouros";
        }
        if (cardsD[index][1] == 4) {
            baralho = "paus";
        }
        let string1 = "imgs/cartas/" + baralho + "/" + cardsD[index][0] + ".png";
        let card = "cardD" + num;


        document.getElementById(card).src = string1;
        num++;
    }


    if (state.gameEnded) { //verifica se o jogo acabou
        //verifica se o dealer ganhou
        let dealerState = state.dealerWon;

        if (dealerState) {
            //constroi uma string
            sndLose.play();

            stringD = "Delaer: Won - " + game.get_cards_value(cardsD);
            stringP = "Player: You Lost " + bet + " chips; " + game.get_cards_value(game.get_player_cards());
            player_chips_total -= bet;

        } else {
            sndWin.play();
            sndMoney.play()
            //constroi uma string
            stringD = "Dealer: Lost - " + game.get_cards_value(cardsD);
            stringP = "Player: You Won " + (bet * 2) + " chips; " + game.get_cards_value(game.get_player_cards());
            player_chips_total += (bet * 2);
        }
        finalize_buttons();

    }


    document.getElementById("dealer").innerHTML = JSON.stringify(stringD);
    document.getElementById("player").innerHTML = JSON.stringify(stringP);


}

function update_player(state) {


    let cardsP = game.get_player_cards();
    stringP = "";
    stringD = "Dealer";
    let estado = state;


    let baralho;
    let num = 1;
    let i;
    for (let index = 0; index < cardsP.length; index++) {
        if (cardsP[index][1] == 1) {
            baralho = "espadas";
        }
        if (cardsP[index][1] == 2) {
            baralho = "copas";
        }
        if (cardsP[index][1] == 3) {
            baralho = "ouros";
        }
        if (cardsP[index][1] == 4) {
            baralho = "paus";
        }
        let string1 = "imgs/cartas/" + baralho + "/" + cardsP[index][0] + ".png"
        let card = "cardP" + num;
        document.getElementById(card).src = string1;
        num++;

    }

    if (estado.gameEnded) { //verifica se o jogo acabou
        update_dealer(state);
        //verifica se o dealer ganhou
        let playerState = !(estado.dealerWon);

        if (playerState) {
            sndWin.play();
            sndMoney.play();
            player_chips_total += (bet * 2);

            stringP = "Player: You Won " + (bet * 2) + " chips; " + game.get_cards_value(cardsP);
            stringD = "Dealer: Lost";

        } else {
            player_chips_total -= bet;
            sndLose.play();
            //constroi uma string
            stringP = "Player: You Lost " + bet + " chips; " + game.get_cards_value(cardsP);
            stringD = "Dealer: Won";
        }
        finalize_buttons();
    }

    if (!estado.gameEnded)
        stringP = "Player: " + game.get_cards_value(cardsP);

    document.getElementById("player").innerHTML = JSON.stringify(stringP);
    document.getElementById("dealer").innerHTML = JSON.stringify(stringD);


}


function dealer_new_card() {

    sndNewCard.play();
    game.dealer_move();
    let state = game.get_game_state();
    update_dealer(state);
    return state;

}

function player_new_card() {

    sndNewCard.play();
    game.player_move();
    let state = game.get_game_state();

    update_player(state);


    return state;

}

function dealer_finish() {
    let state = game.get_game_state();
    game.setDealerTurn(true);

    while (state.gameEnded == false) {

        //update_dealer();
        dealer_new_card();
        update_dealer(state);
        state = game.get_game_state();
        //debug2(state);
    }

}

function checkbet() {
    player_new_card();
    sndCheckBet.play();
    bet = document.getElementById("rangeval").innerText;
    if (bet != 0) {
        buttons_initialization();
        lastBet = bet;
    }
}
