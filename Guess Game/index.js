let coumputerGuess;
let userGuess =[];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate =document.getElementById("inputBox");
let audio =new Audio("music/small.mp3");


const init = () => {
    coumputerGuess =Math.floor(Math.random()*100);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";

};

const startGame =() => {
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
}

//reload the page

const newGameBegin =() => {
    audio.play();
    window.location.reload();
}

const startNewGame = () => {
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled", true);


}
//main login

const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess =[...userGuess,userNumber];
    document.getElementById("guesses").innerHTML =userGuess;
  if(userGuess.length < maxGuess) {
    if(userNumber > coumputerGuess ){
        userGuessUpdate.innerHTML ="Your guess is High ";
        userNumberUpdate.value="";

    } else if(userNumber < coumputerGuess) {
        userGuessUpdate.innerHTML ="Your guess is Low ";
        userNumberUpdate.value="";

    }
    else {
        userGuessUpdate.innerHTML ="Congratulation, It's correct , You Win ";
        userNumberUpdate.value="";
        startNewGame();

    }
} else {
    if(userNumber > coumputerGuess ){
        userGuessUpdate.innerHTML = `You Loose !! correct number was ${coumputerGuess}`;
        userNumberUpdate.value="";
        startNewGame();

    } else if(userNumber < coumputerGuess) {
        userGuessUpdate.innerHTML =`You Loose !! correct number was ${coumputerGuess}`;
        userNumberUpdate.value="";
        startNewGame();

    }
    else {
        userGuessUpdate.innerHTML ="Congratulation, It's correct , You Win";
        userNumberUpdate.value="";
        startNewGame();

    }
    
}
document.getElementById("attempts").innerHTML=userGuess.length;
};


const easyMode = () => {
    audio.play();
    maxGuess=10;
    startGame();

};

const hardMode = () => {
    audio.play();
    maxGuess=5;
    startGame();

};

