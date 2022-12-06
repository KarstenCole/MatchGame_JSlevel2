function initialize(){
    cards = ['1','1','2','2',
             '3','3','4','4',
             '5','5','6','6',
             '7','7','8','8'];
    cardsRevealed = 0;
    lastCard = -1;
    lastlastCard = -1;
    cardsPicked = ['0'];
    cardsMatched = [0];
    run = true;
    SCORE = 0;
    Score = document.getElementById("Score");
    Score.innerHTML = SCORE;

    
    cards = shuffle(cards);
    assignCards(cards);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    console.log(array);

    return array;
}

function assignCards(cards){
    button1 = document.getElementById("button1");
    button2 = document.getElementById("button2");
    button3 = document.getElementById("button3");
    button4 = document.getElementById("button4");
    button5 = document.getElementById("button5");
    button6 = document.getElementById("button6");
    button7 = document.getElementById("button7");
    button8 = document.getElementById("button8");
    button9 = document.getElementById("button9");
    button10 = document.getElementById("button10");
    button11 = document.getElementById("button11");
    button12 = document.getElementById("button12");
    button13 = document.getElementById("button13");
    button14 = document.getElementById("button14");
    button15 = document.getElementById("button15");
    button16 = document.getElementById("button16");
    pictures = [button1,button2,button3,button4,
                button5,button6,button7,button8,
                button9,button10,button11,button12,
                button13,button14,button15,button16,];
    for(var i=0; i<16; i++){
        pictures[i].innerHTML = null;
    }
    //Array of images  
    images = ["<img src=\"images/apple.jpg\">","<img src=\"images/carrot.png\">",
              "<img src=\"images/avocado.webp\">","<img src=\"images/banana.webp\">",
              "<img src=\"images/orange.jpg\">","<img src=\"images/strawberry.jpg\">",
              "<img src=\"images/kiwi.jpg\">","<img src=\"images/blueberries.jpg\">",];
}

function revealCard(card){
    
    
    // doesn't reveal another card if it was matched or if its the same
    if(!(cardsRevealed==1 && lastCard==card) && !cardsMatched.includes(card) && run){
        cardsPicked.push(card);
        cardsRevealed++
// console.log("A Card Revealed");
        SCORE++;
        Score.innerHTML = SCORE;

        // Excutes if there are three cards revealed and the past 2 match
        if(cardsRevealed==3 && cards[lastCard-1]==cards[lastlastCard-1] ){
            cardsRevealed=1;
            cardsMatched.push(lastCard,lastlastCard);
// console.log(cardsMatched);
// console.log("Match");
        // Excutes if there are three cards revealed and the past 2 don't match
        } else if (cardsRevealed==3){
            cardsRevealed=1;
            if(!cardsMatched.includes(lastCard)){pictures[lastCard-1].innerHTML = null}
            if(!cardsMatched.includes(lastlastCard)){pictures[lastlastCard-1].innerHTML = null}
        } 
        // If there are two left and they're picked it ends
        if (cardsRevealed==2 && cardsMatched.length == 15){
            run = false;
        }
        // displays the card
        pictures[card-1].innerHTML = images[cards[card-1]-1];
    
// console.log("card",cards[card-1]);
    
        // sets lastcard
        lastCard = cardsPicked[cardsPicked.length-1];
        // sets lastlastcard
        if(cardsPicked.length>2){
            lastlastCard = cardsPicked[cardsPicked.length-2];
        }   
    }
    
    display();
}

function display(){
    
}